class RootController < ApplicationController

  include MovesHelper

  def index

    if session[:access_token].blank?
      @moves_authorize_uri = Moves.client.auth_code.authorize_url(
        redirect_uri: moves_redirect_uri,
        scope: 'activity',
      )
      return render 'root/signin'
    end
  end
end
