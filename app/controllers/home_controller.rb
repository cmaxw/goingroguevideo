class HomeController < ApplicationController
  def index
  end

  def about
  end

  def thanks
  end

  def debuggingvideo
    redirect_to "http://debuggingruby.eventbrite.com/"
  end
end
