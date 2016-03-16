Rails.application.routes.draw do

  namespace :auth do

    resources :moves, only: [] do

      collection do

        get :callback
      end
    end
  end

  resources :moves, only: [] do

    collection do

      get :logout
      get :recent
      get :profile
    end
  end

  root to: 'root#index', via: [:get]
end
