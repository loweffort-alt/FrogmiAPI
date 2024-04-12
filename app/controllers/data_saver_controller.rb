# frozen_string_literal: true

require 'httparty'

class DataSaverController < ApplicationController
  def save_data_from_api
    # Lógica para manejar la solicitud GET a /api/features
    response = HTTParty.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')

    if response.success?
      json_data = JSON.parse(response.body)
      json_data_features = json_data['features']

      existing_ids = SeismicEvent.pluck(:external_id)
      new_ids = []

      json_data_features.each do |data|
        new_data = save_data__on_database(data)
        new_ids << new_data['external_id']

        # Desactiva las validaciones temporalmente para esta operación
        SeismicEvent.find_or_initialize_by(external_id: new_data['external_id']).tap do |event|
          event.assign_attributes(new_data)
          event.save(validate: false)
        end

        #SeismicEvent.find_or_initialize_by(external_id: new_data['external_id']).update(new_data)
      end

      # Eliminar los registros que ya no existen en la respuesta de la API
      SeismicEvent.where.not(external_id: new_ids).delete_all

      render json: { message: 'Datos de terremotos guardados exitosamente en la base de datos.' }
    else
      render json: { error: 'Error al obtener datos de terremotos' }, status: :internal_server_error
    end
  end

  private

  def save_data__on_database(data)
    {
      'external_id' => data['id'],
      'magnitude' => data['properties']['mag'],
      'place' => data['properties']['place'],
      'time' => data['properties']['time'],
      'tsunami' => data['properties']['tsunami'] == 1,
      'mag_type' => data['properties']['magType'],
      'title' => data['properties']['title'],
      'longitude' => data['geometry']['coordinates'][0],
      'latitude' => data['geometry']['coordinates'][1],
      'external_url' => data['properties']['url']
    }
  end
end

