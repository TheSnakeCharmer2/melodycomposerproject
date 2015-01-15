require 'sinatra'
require 'sequel'

get '/' do
  redirect 'home.html'
end

get '/composer' do
  erb :composer
end

DB = Sequel.connect('sqlite://login.db')

get '/create_table' do
  DB.create_table :login do
    String :user
    String :passw
    Image :canvas

  end
end

get "/login" do
  @error = false
  erb :login


end


post '/dabase' do
  @user = params['username']
  @password = params['password']
  @list = DB[:login]
  @cookie == false
  @checku = @list[:user => @user]
  if @checku == nil
    @error = true
    erb :login
  elsif @checku[:passw] == @password
    erb :composer
  else
    @error = true
    erb :login
  end
end

post '/signup' do
  usign = params['usignup']
  pasign = params['pasign']
  @list = DB[:login]
  @list.insert(:user => usign, :passw => pasign)
  erb :composer
  @cookie == true
end

post '/save' do
  scanvas = params['scanvas']
  @list = DB[:login]
  @list.insert(:canvas => scanvas)
  erb :composer
end


