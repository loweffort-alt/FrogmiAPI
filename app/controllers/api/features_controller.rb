# frozen_string_literal: true

require 'httparty'

module Api
  # Controlador que muestra la data obtenida en https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson
  class FeaturesController < ApplicationController
    # GET /api/features
    def index
        # Lógica para manejar la solicitud GET a /api/features
      response = HTTParty.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')

      if response.success?
        json_data = JSON.parse(response.body)
        json_data_features = json_data['features']
        #EarthquakeModel.delete_all
        transformed_data = json_data_features.map do |data|
          save_data__on_database(data)
          #EarthquakeModel.create!(transform_data(data))
        end

        render json: transformed_data
      else
        render json: { error: 'Error al obtener datos de terremotos' }, status: :internal_server_error
      end
    end

    private

    def transform_data(data)
      {
        'id' => data['id'],
        'type' => "feature",
        'attributes' => {
          'external_id' => data['id']
          'magnitude' => data['properties']['mag'],
          'place' => data['properties']['place'],
          'time' => data['properties']['time'],
          'tsunami' => data['properties']['tsunami'] == 1,
          'mag_type' => data['properties']['magType'],
          'title' => data['properties']['title'],
          'coordinates' => {
            'longitude' => data['geometry']['coordinates'][0],
            'latitude' => data['geometry']['coordinates'][1]
          }
        },
        'links' => {
          'external_url' => data['properties']['url'],
        }
      }
    end

    def save_data__on_database(data)
      {
        'featureid' => data['id'],
        'propertiesmag' => data['properties']['mag'],
        'propertiesplace' => data['properties']['place'],
        'propertiestime' => data['properties']['time'],
        'propertiesurl' => data['properties']['url'],
        'propertiestsunami' => data['properties']['tsunami'] == 1,
        'propertiesmagType' => data['properties']['magType'],
        'propertiestitle' => data['properties']['title'],
        'geometrycoordinates0' => data['geometry']['coordinates'][0],
        'geometrycoordinates1' => data['geometry']['coordinates'][1]
      }
    end

    # GET /api/features/:id
    def show
      # Lógica para manejar la solicitud GET a /api/features/:id
      render json: { message: "GET /api/features/#{params[:id]}" }
    end
  end
end

