require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
# require "sprockets/railtie"
require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module MyttfApi
    class Application < Rails::Application
        # Initialize configuration defaults for originally generated Rails version.
        config.load_defaults 5.2

        # Adding back in Cookies and Sessions ability for Rails API.
        # config.middleware.insert_after ActionDispatch::ParamsParser, ActionDispatch::Cookies
        # config.middleware.insert_after ActionDispatch::ParamsParser, ActionDispatch::Session::CookieStore
        config.middleware.use ActionDispatch::Cookies
        config.middleware.use ActionDispatch::Session::CookieStore

        # Settings in config/environments/* take precedence over those specified here.
        # Application configuration can go into files in config/initializers
        # -- all .rb files in that directory are automatically loaded after loading
        # the framework and any gems in your application.

        # Only loads a smaller set of middleware suitable for API only apps.
        # Middleware like session, flash, cookies can be added back manually.
        # Skip views, helpers and assets when generating a new resource.

        # Updated to false for creating authentication ability.
        config.api_only = false
    end
end
