GoingRogue::Application.routes.draw do
  get 'about', :to => "home#about"
  get 'thanks', :to => "home#thanks"
  get 'debugging-video', :to => "home#debuggingvideo"

  get 'harvest', to: redirect("http://getharvest.com")
  get 'lessaccounting', to: redirect("http://lessaccounting.com")
  get 'hosting', to: redirect('https://www.digitalocean.com/?refcode=a3f178e25ae4')
  get 'omnifocus', to: redirect("http://www.omnigroup.com/omnifocus")
  get 'evernote', to: redirect("http://evernote.com")
  get 'scanner', to: redirect("http://www.amazon.com/gp/product/B008HBFADQ/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B008HBFADQ&linkCode=as2&tag=chamaxwoo-20")

  root :to => 'home#index'

end
