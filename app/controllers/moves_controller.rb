class MovesController < ApplicationController

  include MovesHelper

  def logout

    session[:access_token] = nil
    redirect_to root_path
  end

  def profile

    render json: access_token.get('/api/1.1/user/profile').parsed
  end

  def recent

    render json: access_token.get('/api/1.1/user/summary/daily?pastDays=7').parsed
  end
end
