module Api
  class CommentsController < ApplicationController
    before_action :set_feature
    before_action :set_comment, only: [:destroy]
    skip_before_action :verify_authenticity_token, only: [:create]
    rescue_from ActiveRecord::RecordNotFound, with: :feature_not_found

    def index
      comments = @feature.comments
      render json: comments
    end

    # POST /api/features/:feature_id/comments
    def create
      @comment = @feature.comments.new(comment_params)

      if @comment.save
        render json: @comment, status: :created
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/features/:feature_id/comments/:id
    def destroy
      @comment.destroy
      head :no_content
    end

    private

    def set_feature
      @feature = Feature.find(params[:feature_id])
    end

    def set_comment
      @comment = @feature.comments.find(params[:id])
    end

    def comment_params
      params.require(:comment).permit(:body)
    end

    def feature_not_found
      render json: { error: "Feature not found" }, status: :not_found
    end
  end
end

