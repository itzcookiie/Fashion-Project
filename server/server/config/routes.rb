Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :garments, only: [:index, :create, :destroy]
  post 'signup', to: 'users#signup'
  post 'signin', to: 'users#signin'
  get 'validate', to: 'users#validate'
  get 'wardrobe', to: 'users#get_wardrobe'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
