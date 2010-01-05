require 'rubygems'
require 'sinatra'
require 'haml'

$current_dirname = File.dirname(__FILE__)
$: << $current_dirname


get '/pairku' do
    haml :pairku
end
