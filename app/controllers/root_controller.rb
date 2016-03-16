class RootController < ApplicationController

  def index

    if session[:access_token].blank?
      @moves_authorize_uri = Moves.client.auth_code.authorize_url(
        redirect_uri: callback_auth_moves_url,
        scope: 'activity'
      )
      render 'root/signin'
    end
  end
end
