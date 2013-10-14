get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/game' do

  
  @player1 = Player.find_or_create_by_name(:name => params[:player1])
  @player2 = Player.find_or_create_by_name(:name => params[:player2])

  @game = Game.new
  @game.players << [@player1, @player2]
  @game.save
  
  erb :game
end

post '/create_user' do
  #saves new user info and redirects back to login page 
  @player1 = Player.create(name: params[:name1])
  @player2 = Player.create(name: params[:name2])
  redirect '/'
end 

post '/results' do
  if request.xhr? 
    content_type(:json)
    p params 
    @game = Game.find_by_id(params[:game])
    p @game.winner = params[:winner]
    p @winner_name = Player.find_by_id[:player1]



  else
    erb :game 
  end
end 


