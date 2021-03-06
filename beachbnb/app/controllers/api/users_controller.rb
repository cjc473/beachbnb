class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show" #revisit
    else
      render json: @user.errors.full_messages, status: 422 #revisit for nicer error implementation?
    end
  end

  private 

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
  
end
