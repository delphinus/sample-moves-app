require 'oauth2'

class MovesSettingNotFoundError < StandardError; end

class MovesTokenNotFoundError < StandardError; end

class Moves

  class << self

    def client

      unless class_variable_defined? :@@client

        raise MovesSettingNotFoundError if Settings.moves_client_id.blank? || Settings.moves_client_secret.blank?

        @@client = OAuth2::Client.new(
          Settings.moves_client_id,
          Settings.moves_client_secret,
          site:          Settings.moves_site,
          authorize_uri: Settings.moves_authorize_uri_mobile,
          token_url:     Settings.moves_token_url
        )
      end

      @@client
    end

    def authorize_url(redirect_uri:, scope:)

      client.auth_code.authorize_url(redirect_uri: redirect_uri, scope: scope)
    end

    def get_token(code, redirect_uri:)

      client.auth_code.get_token(code, redirect_uri: redirect_uri)
    end

    def access_token(token, refresh_token)

      raise MovesTokenNotFoundError if token.blank? || refresh_token.blank?

      OAuth2::AccessToken.new(
        client,
        token,
        refresh_token: refresh_token
      )
    end
  end
end
