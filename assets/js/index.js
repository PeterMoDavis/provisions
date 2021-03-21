var ingredientBtn = document.querySelector("#ingredientButton");
var ingredientList = document.querySelector("#dynamic-ingredient-list");
var ingredientInput = document.querySelector("#ingredientInput");
var ulElement = $("#recipeList");
var jrecipecontainer = $("#dynamic-recipe-container");
var pElement2
var primeIngedient="";
var ingredientString = "";
var recipeBtn = document.querySelector("#recipeButton");
var playerBtn = document.querySelector("#playerButton");
const jKey = "e5c67ec0126745b8b0354ae98fcaed4d";
const jKey2 = "e95867d9d064452391efdf410e324e85 "
const peteKey = "9175773144fc417eb84578b92bed4dd9";
const peteKey2 = "50da326f05fc433585a10d5614cc25de";
const jaredKey = "dbe21eb86f054ecfbb133d89f134fb72"
var apiKey = jKey2;
var winePair = "You stumped our sommelier and we could not pair this dish with a wine. Please try again."

// listens for submission on #ingredientBtn and adds it to list
ingredientBtn.addEventListener("click", function () {
  ingredientString += ingredientInput.value + ",";
  var listItem = document.createElement("li");
  listItem.innerHTML = ingredientInput.value;
  ingredientList.append(listItem);
  ingredientInput.value = "";
});
// end #ingredientBtn eventListener

// listens for click on #recipeBtn
recipeBtn.addEventListener("click", function () {
  // calls the getEntrees function to search for recipes
  getEntrees();
  // this removes all child elements from the ingredient list
  const removeChildren = (parent) => {
    while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
  };
  // end #recipeBtn listener

  // remove all child nodes
  removeChildren(ingredientList);
});
// end #recipeBtn eventListener

//j's key e5c67ec0126745b8b0354ae98fcaed4d

//pete's key 9175773144fc417eb84578b92bed4dd9

// var ingredients = "tomatoes";

function getEntrees() {
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredientString}&apiKey=${apiKey}`
  )
    .then((blob) => {
      return blob.json();
    })
    .then((response) => {
      // making variable for recipe array
      var recipes = response.results;
      //looping through recipe titles
      for (let i = 0; i < recipes.length; i++) {
        //create li
        var liElement = $(`<li>${recipes[i].title}</li>`);

        //append li to ul
        ulElement.append(liElement);
        //add even listeners to ul and lis
      }
      ulElement.on("click", liElement, function (e) {
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${e.target.textContent}&apiKey=${apiKey}`
        )
          .then((blob) => {
            return blob.json();
          })
          .then((response) => {

            var chosenRecipeId = response.results[0].id;

            fetch(
              `https://api.spoonacular.com/recipes/${chosenRecipeId}/information/?apiKey=${apiKey}`
            )
              .then((blob) => {
                return blob.json();
              })
              .then((response) => {
                console.log(response);
                ulElement.empty();
                for (let i = 0; i < response.extendedIngredients.length; i++) {
                  let liElement = $(
                    `<li>${response.extendedIngredients[i].name}</li>`
                  );
                  ulElement.append(liElement);
                }

                primeIngedient = response.extendedIngredients[0].name
                let cuisine = response.cuisines[0];
                let dishType = response.dishTypes[0];
                let h1Element = $(`<h1>${response.title}</h1>`);
                let pElement = $(`<p>${response.instructions}</p>`);
                let pElement2 = $(`<p>${response.winePairing.pairingText}</p>`);


                // this will check for wine pairings first for spoontify's built in wine pairing then by cuisine
                // if (typeof pElement2.innerHTML == "undefined") {
                if (!response.winePairing.pairingText) {
                  console.log("typeof pElement2.innerHTML == 'undefined'")
                  if (response.cuisines.length > 0) {
                    console.log("cuisine = " + cuisine);
                    fetch(
                      `https://api.spoonacular.com/food/wine/pairing?food=${cuisine}&apiKey=${apiKey}`
                    )
                      .then((blob) => {
                        return blob.json();
                      })
                      .then((response) => {
                        console.log(response.message);
                        pElement2 = $(`<p>${response.message}</p>`)
                      })
                  } else if (response.dishTypes.length > 0) {
                    console.log("dish type = " + dishType);
                    fetch(
                      `https://api.spoonacular.com/food/wine/pairing?food=${dishType}&apiKey=${apiKey}`
                    )
                      .then((blob) => {
                        return blob.json();
                      })
                      .then((response) => {
                        console.log(response);
                        pElement2 = $(`<p>${response.message}</p>`)
                      })                   
                  } else {
                    console.log("using canned message")
                    pElement2 = $(`<p>${winePair}</p>`);

                  }
                }
                //  end of if statement


                $("#dynamic-recipe-container").append(
                  h1Element,
                  pElement,
                  pElement2
                );




              });
          });
      });
    });

  //==========================================================
}

// eventListener listens for a click on the #playerBtn
playerBtn.addEventListener("click", function () {
  // loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});
// end #playerBtn listener

// This function creates an <iframe> (and YouTube player)
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "H0B0Xg80RGw",
    playerVars: {
      controls: 0,
      autoplay: 1,
      iv_load_policy: 3,
      loop: 1,
      modestbranding: 1,
      playsinline: 0,
      rel: 0,
    },
  });
  // end of player object
}
// end of onYouTubeIframeAPIReady function
//=========================================
//OMINOUS CODE!!!!!!!!!!!!!!!!!!!!
//   "https://api.spoonacular.com/food/wine/pairing?food=clam+chowder&apiKey=dbe21eb86f054ecfbb133d89f134fb72"
// )
//   .then((blob) => {
//     return blob.json();
//     console.log(blob);
//   })
//   .then((response) => {
//     console.log(response)

//     //Dynamically generating wine paring card
//     //Pairing 1
//     $("#pairing1-title1").html(response.pairedWines[0]);
//     $("#pairing1-title2").html(response.pairedWines[1]);
//     $("#pairing1-title3").html(response.pairedWines[2]);
//     $("#pairing1-description").html(response.pairingText);

//   });


// function getWine(foodObject) {
//   var food = foodObject;

//   if (food.winePairing.pairingText !== "undefined") {
//     winePair = food.winePairing;
//     console.log("this is original object" +winePair);
//   } else {


//     if (food.cuisine[0] !== "undefined") {
//       fetch(
//         `https://api.spoonacular.com/food/wine/pairing?food=${food.cuisine[0]}`
//       )
//         .then((blob) => {
//           return blob.json();
//         })
//         .then((response) => {
//           winePair = response;
//           console.log("cuisine pair"+winePair);
//         })

//     }


//   }
// }
