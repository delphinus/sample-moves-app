class Auth::MovesController < ApplicationController

  include MovesHelper

  def callback

    new_token = Moves.get_token(callback_params[:code], redirect_uri: moves_redirect_uri)
    session[:access_token] = new_token.token
    redirect_to root_path
  end

  private

    def callback_params
      params.permit :code
    end
end
