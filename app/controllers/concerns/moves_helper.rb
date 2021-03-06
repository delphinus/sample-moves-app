class MovesHelper < ActiveSupport::Concern

  include Rails.application.routes.url_helpers

  def moves_redirect_uri

    callback_auth_moves_url
  end

  def access_token

    Moves.access_token(session[:access_token], session[:refresh_token])
  end
end
