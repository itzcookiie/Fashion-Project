class OutfitsController < ApplicationController
    
    def index
       @outfit = Outfit.all 
       render json: @outfit
    end

    def create
        @outfit = Outfit.new(outfit: params[:outfit])
        @outfit.user_id = current_user.id
        if @outfit.save
            render json: @outfit
        else
            render json: {error: 'Could not create outfit'}
        end
    end

    # private

    # def outfit_params
    #     params.require(:outfit).permit(outfit: {}, outfit: [])
    # end

end
