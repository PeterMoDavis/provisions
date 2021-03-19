//fetching spoonacular for wines
fetch(
  "https://api.spoonacular.com/food/wine/pairing?food=clam+chowder&apiKey=dbe21eb86f054ecfbb133d89f134fb72"
)
  .then((blob) => {
    return blob.json();
    console.log(blob);
  })
  .then((response) => {
    console.log(response)

    //Dynamically generating wine paring card
    //Pairing 1
    $("#pairing1-title1").html(response.pairedWines[0]);
    $("#pairing1-title2").html(response.pairedWines[1]);
    $("#pairing1-title3").html(response.pairedWines[2]);
    $("#pairing1-description").html(response.pairingText);

  });


//fetching recipepuppy for meal ideas
fetch("http://www.recipepuppy.com/api/?i=clams,milk")
  .then((blob) => {
    return blob.json();
  })
  .then((response) => {
    console.log(response);
  });


