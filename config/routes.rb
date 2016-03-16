Rails.application.routes.draw do

  namespace :auth do

    resources :moves, only: [] do

      collection do
        get :callback
      end
    end
  end

  root to: 'root#index', via: [:get]
end
