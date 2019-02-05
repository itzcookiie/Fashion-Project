class GarmentsController < ApplicationController
    def index
        @garments = Garment.all
        render json: @garments
    end

    def create
        @garment = Garment.new(category: params[:category], colour: params[:colour], image_url: params[:image_url], user_id: current_user.id)
        if @garment.save
            render json: @garment 
        else
            render json: {error: 'Could not create garment'}
        end   
    end

    def destroy
        @garment = Garment.find_by(id: params[:id])
        if @garment
            @garment.destroy 
            render json: {success: "Garment sucessfully deleted"}
        else
            render json: {error: "Unable to delete garment"}
        end
    end
        
    # def garment_params
    #     params.require(:garment).permit(:category, :colour, :image_url, :user_id, :current_user.id)
    # end
        
end 
