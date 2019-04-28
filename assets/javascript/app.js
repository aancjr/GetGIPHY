//variable for the api query
var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=vokt7stTYaqiAx2gkIYLxGMTgFfRtAT3&limit=10";

var makesModels = ["BMW", "Mercedes", "Ford", "Chevy", "Supra", "m3"]

//ajax call out to the api...
$.ajax ({
    url: queryURL,
    method: "GET"
}).then (function(response){
    console.log(response);
});