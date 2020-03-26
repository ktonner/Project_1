console.log("hooked up")

$(document).ready(function () {
    // global variables
    let lat = 0;
    let long = 0;


    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log(lat + "and" + long);

    });


    $("#wine").click(function (e) {
        e.preventDefault();
        console.log(lat + "and" + long + "inside of the click");

        var winery = "wine"
        //Query for google places
        const queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=500&types=" + winery + "&key=AIzaSyD9Ff1tE0-VCQ6xdBVIecM05QkaMPvHlGU"
        //AJAX Call to Places API
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            //console.log(response);
            // choose the nearest 5 location
            for (var i = 0; i < 5; i++) {
                var element = response.results[i];
                console.log(element);
                // append the name and the nearest location on the card div
                var div = $("<p>").addClass("card-name").text(element.name);
                var location = $("<p>").addClass("card-location").text(element.vicinity);
                var images1 = $("<img>").attr("src", element.icon)
                // put them on the html page
                $("#wineSelection").append(div, location, images1); 

            }
        });
    });

});


