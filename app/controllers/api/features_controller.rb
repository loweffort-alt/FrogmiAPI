# frozen_string_literal: true

require 'httparty'

module Api
  # Controlador que muestra la data obtenida en https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson
  class FeaturesController < ApplicationController
    before_action :validate_pagination_params, :validate_mag_type_if_exist, only: [:index]

    # GET /api/features
    def index
      page = params[:page].to_i
      per_page = [params[:per_page].to_i, 1000].min
      offset = (page - 1) * per_page

      filtered_features = filter_by_mag_type(Feature.all)
      
      total_count = filtered_features.count
      features = filtered_features.limit(per_page).offset(offset)
      total_count_per_page = features.count

      total_pages = (total_count.to_f / per_page).ceil

      render json: {
        metadata: {
          total: total_count,
        },
        data: data_formatter(features),
        pagination: {
          current_page: page,
          total: total_pages,
          per_page: total_count_per_page
        }
      }
    end

    # GET /api/features/:id
    def show
      if params[:id].present? && params[:id].to_i > 0
        feature_id = params[:id].to_i
        element = Feature.find(feature_id)

        render json: element.as_json
      else
        render json: { error: 'feature ID is missing' }, status: :bad_request
      end
    end

    private

    def validate_pagination_params
      page = params[:page].to_i
      per_page = params[:per_page].to_i

      redirect_to api_features_path(page: 1, per_page: 1000) if page < 1 || per_page < 1 || per_page > 1000
    end

    def validate_mag_type_if_exist
      if params[:mag_type].present?
        allowed_mag_types = %w(md ml ms mw me mi mb mlg)
        mag_types = params[:mag_type].split(',')

        redirect_to api_features_path(page: 1, per_page: 1000) if (mag_types - allowed_mag_types).any?
      end
    end

    def filter_by_mag_type(features)
      if params[:mag_type].present?
        mag_types = params[:mag_type].split(',')
        features.where(mag_type: mag_types)
      else
        features
      end
    end

    def data_formatter(data)
      data.map do |feature|
        {
          id: feature.id,
          type: "feature",
          attributes: {
            external_id: feature.external_id,
            magnitude: feature.magnitude,
            place: feature.place,
            time: feature.time,
            tsunami: feature.tsunami,
            mag_type: feature.mag_type,
            title: feature.title,
            coordinates: {
              longitude: feature.longitude,
              latitude: feature.latitude
            }
          },
          links: {
            external_url: feature.external_url
          }
        }
      end
    end
  end
end

