require 'bundler/capistrano'

set :application, "railsrampup"
set :repository,  "git@github.com:IntentionalExcellence/railsrampup.git"

set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

default_run_options[:pty] = true
set :use_sudo, false
set :deploy_to, '/var/www/railsrampup'
set :user, 'chuck'
set :deploy_via, :remote_cache

role :web, "173.255.201.23"                          # Your HTTP server, Apache/etc
role :app, "173.255.201.23"                          # This may be the same as your `Web` server
role :db,  "173.255.201.23", :primary => true # This is where Rails migrations will run

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

before "deploy:migrate", "deploy:link_config"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end

  task :link_config do
    run "#{try_sudo} ln -s #{deploy_to}/shared/config/database.yml #{deploy_to}/current/config/database.yml"
  end
end
