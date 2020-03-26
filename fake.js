 $("#beer-button").on("click", function(){
 for(i=0; i<=5, i++){
    var box = $("<container>")
    var title = response[i].title
    box.append($("<h1>").text(title))
    ...

    $("#display-case").append(box)
 }

 })