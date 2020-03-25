// document.getElementById("hit").addEventListener("click", (event) => {
//     //no refresh
//     event.preventDefault();
//     //console.log(document.getElementById("test").value);
//     // //AJAX Call to Brewery API
//     // const queryURL = "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/breweries?key=c89b3a27cf9adf60c71b39ce50ffa671&";
//     //get the users position from the geolocation API
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(lat +"and"+ long);
        //Query for google places
        const queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=500&types=wine&key=AIzaSyBRbn4-RYBysbGOiH11a0r5xu4NLIwM4iA"
        //AJAX Call to Places API
        $.ajax({ url: queryURL, method: 'GET' }).then(function (response) {
            console.log(response);
        });
    });
;


    //Dropdown menu click
    $(".dropdown").on("click", function(){
        $(".dropdown").addClass("is-active")
    })