# frozen_string_literal: true

require 'httparty'

class DataSaverController < ApplicationController
  def save_data_from_api
    cached_data = Rails.cache.read('earthquake_data')

    if cached_data.present?
      process_data(cached_data)
    else
      response = HTTParty.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')

      if response.success?
        json_data = JSON.parse(response.body)
        json_data_total = json_data['metadata']
        json_data_features = json_data['features']

        Rails.cache.write('earthquake_data', json_data_features, expires_in: 1.hour)

        process_data(json_data_features, json_data_total)
      else
        render json: { error: 'Error al obtener datos de terremotos' }, status: :internal_server_error
      end
    end
  end

  private

  #-------------------------------------------------------
#  def process_data(json_data_features, json_data_total)
    #ActiveRecord::Base.transaction do
      #new_ids = []

      #json_data_features.each do |data|
        #new_data = save_data_on_database(data)
        #feature = Feature.find_or_initialize_by(external_id: new_data['external_id'])
        #if feature.new_record? || feature.changed?
          #if feature.update(new_data)
            #new_ids << feature.external_id
          #else
            ## Solo guarda como inválido si realmente es un nuevo dato inválido
            #InvalidFeature.find_or_create_by(external_id: new_data['external_id']) do |invalid|
              #invalid.assign_attributes(new_data)
            #end
          #end
        #end
      #end

      ## Eliminar registros obsoletos
      #Feature.where.not(external_id: new_ids).delete_all
    #end

    #render_total_data(json_data_total)
  #end

  #def save_invalid_data(data)
    #InvalidFeature.create(data)
  #end

  #def render_total_data(json_data_total)
    #amount_data = Feature.count
    #render json: {
      #metadata: json_data_total,
      #message: 'Datos de terremotos procesados. Algunos datos pueden estar en la tabla de características inválidas.',
      #valid_total: amount_data,
      #invalid_total: InvalidFeature.count
    #}
  #end

  #------------------------------------------------------

  def process_data(json_data_features, json_data_total)
    existing_ids = Feature.pluck(:external_id)
    new_ids = []

    json_data_features.each do |data|
      new_data = save_data_on_database(data)
      new_ids << new_data['external_id']

      Feature.find_or_initialize_by(external_id: new_data['external_id']).tap do |event|
        event.assign_attributes(new_data)
        event.save(validate: true)
      end
    end

    ids_no_feature = Feature.where.not(external_id: new_ids).count
    amount_data = Feature.count
    deleted_ids_count = existing_ids.count - new_ids.count
    Feature.where.not(external_id: new_ids).delete_all

    render json: { 
      metadata: json_data_total,
      message: 'Datos de terremotos guardados exitosamente en la base de datos.',
      total: amount_data,
      ids_no_feature: ids_no_feature 
    }
  end

  def save_data_on_database(data)
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
    }.compact.slice(*Feature.column_names)
  end
end

