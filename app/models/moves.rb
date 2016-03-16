class MovesSettingNotFoundError < StandardError; end

class Moves

  require 'oauth2'

  def self.client

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
end
