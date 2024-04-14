module Api
  class CommentsController < ApplicationController
    before_action :set_feature
    before_action :set_comment, only: [:destroy]

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

    # Use callbacks to share common setup or constraints between actions.
    def set_feature
      @feature = Feature.find(params[:feature_id])
    end

    def set_comment
      @comment = @feature.comments.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:body)
    end
  end
end

