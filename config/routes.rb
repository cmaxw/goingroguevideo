Railsrampup::Application.routes.draw do
  get 'about', :to => "home#about"
  get 'thanks', :to => "home#thanks"

  root :to => 'home#index'

end
