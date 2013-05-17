Railsrampup::Application.routes.draw do
  get 'about', :to => "home#about"
  get 'thanks', :to => "home#thanks"
  get 'debugging-video', :to => "home#debugging-video"

  root :to => 'home#index'

end
