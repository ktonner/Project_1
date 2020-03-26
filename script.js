$(document).ready(function () {
    //no refresh

    //get the users position from the geolocation API
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(lat + "and" + long);
        //Query for google places
        var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=500&types=wine&key=AIzaSyBRbn4-RYBysbGOiH11a0r5xu4NLIwM4iA"
        //AJAX Call to Places API
        $.ajax({ url: queryURL, method: 'GET' }).then(function (response) {
            console.log(response);
        });

        //when the user selects a beer...
        $(".dropdown-item").on("click", function () {
            var pour = $(".dropdown-item").text
            //!!!! DO NOT TOUCH THIS, I WILL WORK ON THIS TOMORROW - KATHLEEN
            var queryURL = "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search/geo/point?lat=" + lat + "&lng=" + long + "&radius=40&key=c400eb8346467f09e19ffeff274b1b6a"
            console.log(queryURL);
            //AJAX Call to Brewery API
            $.ajax({ url: queryURL, method: 'GET' }).then(function (response) {
                console.log(response);
                //ToDo Show the DATA on the HTML
                //showStuffOnThePage();
            });
        })

        //THIS IS FOR THE WINE BUTTON --KATHLEEN
        // $("#wine").on("click", function () {
        //     // navigator.geolocation.getCurrentPosition((position) => {
        //     var lat = position.coords.latitude;
        //     var long = position.coords.longitude;

        //     var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=9000&keyword=" + "wine" + "&key=AIzaSyAQqhU1drEdGVTniZuVfGDUclDmUIC4MSo"

        //     $.ajax({
        //         url: queryURL,
        //         method: 'GET'
        //     }).then(function (response) {
        //         console.log(response);
        //     });

        // })




        //Dropdown Menu JS
        //clicking on the menu opens it
        $(".dropdown").on("click", function () {
            event.stopPropagation();
            $(".dropdown").addClass("is-active")

        })
        //if you click off the menu it closes
        $(window).click(function () {
            $(".dropdown").removeClass("is-active")
        });

        //if you click off the menu it closes
        $(window).click(function () {
            $(".dropdown").removeClass("is-active")
        })
    })
})