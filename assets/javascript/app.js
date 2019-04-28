//variable for the api query
var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=vokt7stTYaqiAx2gkIYLxGMTgFfRtAT3&limit=10";

//array to provide the user with recommended GIFS...
var makesModels = ["BMW", "Mercedes", "Ford", "Chevy", "Supra", "m3"];

//function to show recommended GIF buttons
function buttons() {
    //delete listed GIFS prior to adding new buttons
    $("#buttons").empty();

    //loop through the array of makes and models...
    var i;
    for (i = 0; i < makesModels.length; i++) {
        $("#buttons").append("<button>" + makesModels[i]);
    }
}


$(function (){
    //ajax call out to the api...
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then (function(response){
        console.log(response);
    });
    
    //function to take user input and add it as a button...
    $("#add-makesModels").on("click", function(event){
        event.preventDefault();
        //variable to grab the users text...
        var input = $("#userInput").val();
        //take users text and add it to the array of makesModels
        makesModels.push(input);
        //call the buttons function to run through the array and creat a button.
        buttons();
    })
    //call buttons function to show list of gifs to start with...
    buttons();
})