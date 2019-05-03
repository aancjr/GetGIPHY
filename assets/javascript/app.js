//array to provide the user with recommended GIFS...
var makesModels = ["BMW", "Mercedes", "Ford", "Chevy", "Supra", "m3"];

$(document).ready(function() {
    //call buttons function to show list of gifs buttons...
    createButton();

    //Add click event listener to all alements with "gif-btn"...
    $(document).on("click", ".gif-btn", displayGif);
    
    //function to show recommended GIF buttons
    function createButton() {
        //delete listed GIFS prior to adding new buttons
        $("#buttons").empty();
        
        //loop through the array of makes and models...
        for (var i = 0; i < makesModels.length; i++) {
            console.log(makesModels[i]);  
            //create new button
            var button = $("<button>");
            //give each new div a class so that we can call all buttons later
            button.addClass("gif-btn");
            //add a data-attribute
            button.attr("data-name", makesModels[i]);
            //give button text
            button.text(makesModels[i]);
            //add button to button view
            $("#buttons").append(button);
        };    
    };    

    //function handles events when button is clicked...
    $("#add-makesModels").on("click", function(event){
        event.preventDefault();
        //variable to grab the users text...
        var request = $("#userInput").val();
        //take users text and add it to the array of makesModels
        console.log(request);
        makesModels.push(request);
        //call the buttons function to run through the array and creat a button.
        createButton();
        $("#userInput").val('');
    });
    
    
    function displayGif() {
        //variable for the api query
        var request = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+request+"&api_key=vokt7stTYaqiAx2gkIYLxGMTgFfRtAT3&limit=10";
        
        //ajax call out to the api...
        $.ajax ({
            url: queryURL,
            method: "GET"
        }).then (function (response){
            //variable for reading through the api...
            var results = response.data;
            //loop to go through the data...
            for (var i = 0; i < results.length; i++){
            //creating a div to hold the gif in the right area of HTML
            var gifDiv = $("<div>");
            //paragraph tag for rating
            var pRating = $("<p>").text("Rating: " + results[i].rating);
            //element to show gif
            var showGif = $("<img>");
            showGif.attr("src", results[i].images.fixed_height.url);
             //display gif and rating
            gifDiv.append(pRating);
            gifDiv.append(showGif);

            $("#gifHolder").prepend(showGif, pRating);
            }
        });   
    };
});
    
