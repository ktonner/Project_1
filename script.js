const queryURL = "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/breweries?key=c89b3a27cf9adf60c71b39ce50ffa671&";

$.ajax({url: queryURL,method: 'GET'}).then(function(response) {
    console.log(response);
});

