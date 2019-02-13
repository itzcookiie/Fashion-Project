class UsersController < ApplicationController
    def index
        @users = User.all 
        render json: @users
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user 
            render json: @user 
        else
            render json: {error: 'User not found'}, status: 404
        end
    end

    def signup
        @user = User.new(username: params[:username], password: params[:password])
        if @user.save  
            render json: {token: issue_token({id: @user.id})} 
        else
            render json: {error: 'Could not create user'}, status: 400
        end
    end

    def signin
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            render json: {token: issue_token({id: @user.id})} 
        else
            render json: {error: 'Invalid username or password'}, status: 400
        end  
    end

    def validate
        @user = current_user
        if @user
            render json: {username: @user.username, token: issue_token({id: @user.id})}
        else
            render json: {error: 'User not found'}, status: 400
        end 
    end

    def get_wardrobe
        @user = current_user
        if @user 
            render json: @user.garments 
        else
            render json: {error: 'User not found/No garments found'}, status: 400
        end
    end

    def get_outfits
        @user = current_user
        if @user
            render json: @user.outfits 
        else
            render json: {error: 'User not found/No outfits found'}, status: 400
        end
    end

end
