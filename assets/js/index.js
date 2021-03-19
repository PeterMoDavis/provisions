
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

var ingredientBtn = document.querySelector("#ingredientButton");
var ingredientList = document.getElementById("#ingredientList");
var ingredientInput = document.querySelector("#ingredientInput");
var ingredientString = "";
var recipeBtn = document.querySelector("#recipeButton");

// function listens for ingredient submission and adds it to list
ingredientBtn.addEventListener("click", function () {
  ingredientString += ingredientInput.value + ",";
  var listItem = document.createElement('li');
  listItem.innerHTML = ingredientInput.value;
  ingredientList.appendChild(listItem);
  ingredientInput.value = "";
  console.log(ingredientString);
})

recipeBtn.addEventListener("click", function () {
  // this removes all child elements from the ingredient list
  const removeChildren = (parent) => {
    while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
  };

  // remove all child nodes
  removeChildren(ingredientList);
})