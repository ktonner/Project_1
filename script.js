$(document).ready(function () {
  //no refresh

  //When the beer button is clicked
  $("#beer-btn").on("click", function () {
    callApi();
  });
})
function callApi() {

  //get the users position from the geolocation API
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    //display location coordinates
    console.log(lat + "and" + long);
    //display info
    console.log("click")
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search/geo/point?lat=" + lat + "&lng=" + long + "&radius=40&key=c400eb8346467f09e19ffeff274b1b6a"
    console.log(queryURL);
    //AJAX Call to Brewery API
    $.ajax({ url: queryURL, method: 'GET' }).then(function (response) {
      console.log(response);
      createBeerCards(response.data);
      //Show stuff on the page();
    });
  });
}
//Create a column to display search results
function createBeerCards(data) {
  $("#display-case").empty()
  data.forEach(beer => {
    let card = `
    <div class="card">
<div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="${beer.brewery.images.icon}" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${beer.brewery.name}</p>
          <p class="subtitle is-6">${beer.brewery.description}</p>
        </div>
      </div>
</div>
  </div>
    
    `;
    $('#display-case').append(card)
  });


}
    //  $("#beer-button").on("click", function(){
    //     for(i = 0; i <= 5, i++;){
    //        var box = $("<container>")
    //        var title = response[i].title
    //        box.append($("<h1>").text(title))


    //        var box = $("<container>")
    //        var steeetAddress = response[i].streetAddress
    //        box.append($("<h2>").text(streetAddress))

    //        $("#display-case").append(box)
    //     }

    //     })

    // //THIS IS FOR THE WINE BUTTON --KATHLEEN
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
    // //Query for google places
    // var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=500&types=wine&key=AIzaSyBRbn4-RYBysbGOiH11a0r5xu4NLIwM4iA"
    // //AJAX Call to Places API
    // $.ajax({ url: queryURL, method: 'GET' }).then(function (response) {
    //     console.log(response);
    // });




    //Dropdown Menu JS
    //clicking on the menu opens it
    // $(".dropdown").on("click", function () {
    //     event.stopPropagation();
    //     $(".dropdown").addClass("is-active")

    // })
    // //if you click off the menu it closes
    // $(window).click(function () {
    //     $(".dropdown").removeClass("is-active")
    // });

    // //if you click off the menu it closes
    // $(window).click(function () {
    //     $(".dropdown").removeClass("is-active")
    // })