console.log("hooked up")

$(document).ready(function () {


    $("#wine").click(function (e) {
        e.preventDefault();


        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log(lat + "and" + long);
            var winery = "wine"
            //Query for google places
            const queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=500&types=" + winery + "&key=AIzaSyD9Ff1tE0-VCQ6xdBVIecM05QkaMPvHlGU"
            //AJAX Call to Places API
            $.ajax({
                url: queryURL,
                method: 'GET'
            }).then(function (response) {
                //console.log(response);

                for (var i = 0; i < 5; i++) {
                    var element = response.results[i];
                    console.log(element);

                    var div = $("<p>").addClass("card-name").text(element.name);
                    var location = $("<p>").addClass("card-location").text(element.vicinity);
                    var images1 = $("<img>").attr("src", element.icon)
                    $("#wineSelection").append(div,location,images1);``

                }
            });
        });

    })
})

