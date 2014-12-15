require 'sinatra'

get '/' do
  redirect 'home.html'
end

get '/composer' do
  erb :composer
end