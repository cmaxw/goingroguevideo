Railsrampup::Application.routes.draw do
  get 'about', :to => "home#about"

  root :to => 'home#index'

end
