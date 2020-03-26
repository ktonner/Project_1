

// document.getElementById("hit").addEventListener("dropdown-item", event => {
//     //no refresh
//     event.preventDefault();
//     console.log(document.getElementById("test").value);
    // //AJAX Call to Brewery API
    const queryURL = "https://cors-anywhere.herokuapp.com/https://api.openbrewerydb.org/breweries?by_city=orlando?key=30ca2231c143bbf6621ca369ec091127&";
    $.ajax({ url: queryURL, method: 'GET' }).then(function (response) {
        console.log(response);
        //Query for BreweryDB
        //get the users position from the geolocation API
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log(lat + "and" + long);
            //Query for google places
            const queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/vineyard/nearbysearch/json?location=" + lat + "," + long + "&radius=500&types=vineyard&key=AIzaSyBRbn4-RYBysbGOiH11a0r5xu4NLIwM4iA"
            //AJAX Call to Places API
            $.ajax({ url: queryURL, method: 'GET' }).then(function (response) {
                console.log(response);
            });
        });
    })


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
    console.log(lat + "and" + long);
    //Query for google places
    const queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=500&types=winery&key=AIzaSyBRbn4-RYBysbGOiH11a0r5xu4NLIwM4iA"
    //AJAX Call to Places API
    $.ajax({ url: queryURL, method: 'GET' }).then(function (response) {
        console.log(response);



//get the users position from the geolocation API
navigator.geolocation.getCurrentPosition((position) => {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(position)
    console.log(lat + " and " + long);

    //when the user selects a beer...
    $(".dropdown-item").on("click", function () {
        var pour = $(".dropdown-item")
        //get the users position from the geolocation API
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log(lat +" and "+ lng);
        //call the first API
        getPlaces(lat,lng,pour);
    }); 

const getPlaces = (lat,lng) => {
    //    Query for google places
        const queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=500&types=beer&input="+pour+"&key=AIzaSyBRbn4-RYBysbGOiH11a0r5xu4NLIwM4iA"
        //AJAX Call to Places API
        $.ajax({ url: queryURL, method: 'GET' }).then(function (response) {
            console.log(response);
            //get city from response
            city = response.results[0].name
            console.log(city)
            getBreweries(city)
        })} 
        const getBreweries=()=>{
            //!!!! DO NOT TOUCH THIS, I WILL WORK ON THIS TOMORROW - KATHLEEN
            const queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + "Winter_Springs"
            console.log(queryURL);
            //AJAX Call to Brewery API
            $.ajax({ url: queryURL, method: 'GET' }).then(function (response) {
                console.log(response);
                //ToDo Show the DATA on the HTML
                //showStuffOnThePage();
            });   
}})

       var queryURL = "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=" + lat + "&lng=" +long+"&radius=10&key=59f4cee9ab8d9017113fe1a5520db79b";
       $.ajax({ url: queryURL, 
            method: 'GET' }).then(function (response) {
            console.log(response);
        }
        )

        //THIS IS FOR THE WINE BUTTON --KATHLEEN
        $("#wine").on("click", function () {
            // navigator.geolocation.getCurrentPosition((position) => {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=9000&keyword=" + "wine" + "&key=AIzaSyAQqhU1drEdGVTniZuVfGDUclDmUIC4MSo"

            $.ajax({
                url: queryURL,
                method: 'GET'
            }).then(function (response) {
                console.log(response);
            });
        })

    });


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

//clicking on a beer sets the value

($(".dropdown-item")).on("click", function(){
    $(event.target).addClass("is-active")
    beerChoice = event.target.text 
    console.log($(".dropdown-title").innerHTML)
})

($(".dropdown-item")).on("click", function () {
    event.preventDefault();
    $(event.target).addClass("is-active")
    beerChoice = event.target.text
    console.log(beerChoice)
    $(".dropdown").removeClass("is-active")
})


//function to grab brewery results

