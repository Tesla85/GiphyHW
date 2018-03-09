function actorButtonClickHandler() {
    var gifItem = $(this).attr("data-item");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifItem + "&api_key=dc6zaTOxFJmzC&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var itemImage = $("<img>");

            itemImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.prepend(itemImage);

            $(".gifs-populate-here").prepend(gifDiv);
        }
    });
}

$(document).on("click", ".actorButton", actorButtonClickHandler);
 
var items = [];

function renderButtons() {

    // Delete the content inside the movies-view div prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $(".buttons").empty();


    // Loop through the array of movies, then generate buttons for each movie in the array
    for (var i= 0; i <items.length; i++) {
        var a = $("<button>");
        a.addClass("actorButton");
        a.attr("data-item", items[i]);
        a.text(items[i]);
        $(".buttons").append(a);
    }
}

$(".add-item").on("click", function(event) {

    event.preventDefault();

var item = $(".item-input").val().trim();

items.push(item);

renderButtons();
});

renderButtons();