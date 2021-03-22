var ingredientBtn = document.querySelector("#ingredientButton");
var ingredientList = document.querySelector("#dynamic-ingredient-list");
var ingredientInput = document.querySelector("#ingredientInput");
var bodyEl = document.querySelector(".body");
var winePair = document.querySelector("#winePair");
winePair.innerHTML = "";
var ulElement = $("#recipeList");
var ingredientString = "";
var recipeBtn = document.querySelector("#recipeButton");
var playerBtn = document.querySelector("#playerButton");
var bodyEl = document.querySelector(".body");
var lightsUpBtn = document.querySelector("#lightsUpBtn");
var wineIngredients = [];
var aisleIngredients = [];
const jKey2 = "687fd01456924118932a158740718f76";
const jKey = "e5c67ec0126745b8b0354ae98fcaed4d";
const peteKey = "9175773144fc417eb84578b92bed4dd9";
const peteKey2 = "50da326f05fc433585a10d5614cc25de";

var apiKey = peteKey2;

//checkCuisine first searches for the cuisine wine pairing and if it doesnt work it call the checkMeat function
function checkCuisine(foodObject) {
  // if it is undefined it first tries to search for a cuisine based wine pairing
  console.log(
    "first check (cuisine) decided it was undefined " + winePair.innerHTML
  );
  var cuisineObject = foodObject;
  if (cuisineObject.cuisines.length > 0) {
    var cuisine = cuisineObject.cuisines[0];
    console.log("cuisine = " + cuisine);
    fetch(
      `https://api.spoonacular.com/food/wine/pairing?food=${cuisine}&apiKey=${apiKey}`
    )
      .then((blob) => {
        return blob.json();
      })
      .then((response) => {
        console.log(
          "heres the response from the cuisine search " + response.pairingText
        );
        if (
          typeof response.pairingText != "undefined" &&
          response.pairingText != ""
        ) {
          winePair.innerHTML = response.pairingText;
        } else {
          checkMeat(cuisineObject);
        }
      });
  } else {
    console.log("there was no cuisine to check");
    checkMeat(cuisineObject);
  }

  // end of cuisine check
}
// end of checkCuisine function

// checks for "frozenmeat" aisle ingredient and searches for a wine pairing
function checkMeat(food) {
  var aisle = food;
  console.log(aisle);
  console.log(aisleIngredients);
  if (aisleIngredients.indexOf("Seafood") >= 0) {
    var searchTerm =
      wineIngredients[aisleIngredients.indexOf("Seafood")].nameClean;
    console.log(searchTerm);
    fetch(
      `https://api.spoonacular.com/food/wine/pairing?food=${searchTerm}&apiKey=${apiKey}`
    )
      .then((blob) => {
        return blob.json();
      })
      .then((response) => {
        if (
          typeof response.pairingText != "undefined" &&
          response.pairingText != ""
        ) {
          winePair.innerHTML = response.pairingText;
        } else {
          lastWine();
        }
      });
  } else if (aisleIngredients.indexOf("Frozen;Meat") >= 0) {
    var searchTerm =
      wineIngredients[aisleIngredients.indexOf("Frozen;Meat")].nameClean;
    console.log(searchTerm);
    fetch(
      `https://api.spoonacular.com/food/wine/pairing?food=${searchTerm}&apiKey=${apiKey}`
    )
      .then((blob) => {
        return blob.json();
      })
      .then((response) => {
        if (
          typeof response.pairingText != "undefined" &&
          response.pairingText != ""
        ) {
          winePair.innerHTML = response.pairingText;
        } else {
          lastWine();
        }
      });
  } else if (aisleIngredients.indexOf("Meat") >= 0) {
    var searchTerm =
      wineIngredients[aisleIngredients.indexOf("Meat")].nameClean;
    console.log(searchTerm);
    fetch(
      `https://api.spoonacular.com/food/wine/pairing?food=${searchTerm}&apiKey=${apiKey}`
    )
      .then((blob) => {
        return blob.json();
      })
      .then((response) => {
        if (
          typeof response.pairingText != "undefined" &&
          response.pairingText != ""
        ) {
          winePair.innerHTML = response.pairingText;
        } else {
          lastWine();
        }
      });
  } else if (aisleIngredients.indexOf("Pasta and Rice") >= 0) {
    var searchTerm =
      wineIngredients[aisleIngredients.indexOf("Pasta and Rice")].nameClean;
    console.log(searchTerm);
    fetch(
      `https://api.spoonacular.com/food/wine/pairing?food=${searchTerm}&apiKey=${apiKey}`
    )
      .then((blob) => {
        return blob.json();
      })
      .then((response) => {
        if (
          typeof response.pairingText != "undefined" &&
          response.pairingText != ""
        ) {
          winePair.innerHTML = response.pairingText;
        } else {
          lastWine();
        }
      });
  } else if (aisleIngredients.indexOf("Cheese") >= 0) {
    var searchTerm =
      wineIngredients[aisleIngredients.indexOf("Cheese")].nameClean;
    console.log(searchTerm);
    fetch(
      `https://api.spoonacular.com/food/wine/pairing?food=${searchTerm}&apiKey=${apiKey}`
    )
      .then((blob) => {
        return blob.json();
      })
      .then((response) => {
        if (
          typeof response.pairingText != "undefined" &&
          response.pairingText != ""
        ) {
          winePair.innerHTML = response.pairingText;
        } else {
          lastWine();
        }
      });
  } else if (aisleIngredients.indexOf("Produce") >= 0) {
    var searchTerm =
      wineIngredients[aisleIngredients.indexOf("Produce")].nameClean;
    console.log(searchTerm);
    fetch(
      `https://api.spoonacular.com/food/wine/pairing?food=${searchTerm}&apiKey=${apiKey}`
    )
      .then((blob) => {
        return blob.json();
      })
      .then((response) => {
        if (
          typeof response.pairingText != "undefined" &&
          response.pairingText != ""
        ) {
          winePair.innerHTML = response.pairingText;
        } else {
          lastWine();
        }
      });
  } else if (aisleIngredients.indexOf("Nuts") >= 0) {
    var searchTerm =
      wineIngredients[aisleIngredients.indexOf("Nuts")].nameClean;
    console.log(searchTerm);
    fetch(
      `https://api.spoonacular.com/food/wine/pairing?food=${searchTerm}&apiKey=${apiKey}`
    )
      .then((blob) => {
        return blob.json();
      })
      .then((response) => {
        if (
          typeof response.pairingText != "undefined" &&
          response.pairingText != ""
        ) {
          winePair.innerHTML = response.pairingText;
        } else {
          lastWine();
        }
      });
  } else {
    lastWine();
  }
}
// end of checkMeat

function lastWine() {
  winePair.innerHTML =
    "Our sommelier is unable to pair a wine with your selection. Please try again";
}

// listens for submission on #ingredientBtn and adds it to list
ingredientBtn.addEventListener("click", function () {
  ingredientString += ingredientInput.value + ",";
  var listItem = document.createElement("li");
  listItem.innerHTML = ingredientInput.value;

  console.log(ingredientList);
  //changed the append to prepend
  ingredientList.prepend(listItem);
  ingredientInput.value = "";
});
// end #ingredientBtn eventListener

// listens for click on #recipeBtn
recipeBtn.addEventListener("click", function () {
  console.log(ingredientString);
  //==========================LOCAL STORAGE=====================
  let ingredientsArray = JSON.parse(localStorage.getItem("ingredients")) || [];
  //add element to the top of the array
  ingredientsArray.unshift(ingredientString);
  //prepend to the ingredients list
  $("#dynamic-ingredient-list").prepend(
    ingredientsArray[ingredientsArray.length - 1]
  );
  localStorage.setItem("ingredients", JSON.stringify(ingredientsArray));
  //==========================LOCAL STORAGE=====================
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
  //clear ingredient string
  ingredientString = "";
});

//display local storage function

function localStorageDisplay() {
  if (localStorage.ingredients) {
    //get ingredients from storage
    let ingredientsArray = JSON.parse(localStorage.getItem("ingredients"));
    //cut ingredients array down to 5
    ingredientsArray.splice(6);
    //loop through ingredients array
    for (let i = 0; i < ingredientsArray.length; i++) {
      //append to list container replacing the commas for & slicing off the end commas and adding the illustrious wine emoji.
      $("#dynamic-ingredient-list").append(
        `<li>${ingredientsArray[i].replace(/,/g, " & ").slice(0, -1)} 🍷</li>`
      );
    }
    $("#dynamic-ingredient-list").on("click", "li", function (e) {
      let chosenItem = e.target.textContent.replace(/ & /g, ", ").slice(0, -2);
      ingredientString = chosenItem;
      getEntrees();
    });
  }
}

localStorageDisplay();

//Currently Jared's api key is in url. Jared did not make it into a variable
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

      //emptying containers
      ulElement.empty();
      $("#dynamic-recipe-container").empty();

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
                ulElement.empty();
                wineIngredients = response.extendedIngredients;
                for (let i = 0; i < wineIngredients.length; i++) {
                  // this puts the name of the aisle from each ingredient object into an array that we will use to determine wine \
                  aisleIngredients[i] = wineIngredients[i].aisle;

                  let liElement = $(`<li>${wineIngredients[i].name}</li>`);
                  //turning off event listener
                  ulElement.off();

                  ulElement.append(liElement);
                }

                // puts the recipe's wine pairing text into var winePairText to check for "undefined"
                if (typeof response.pairingText != "undefined") {
                  winePair.innerHTML = response.pairingText;
                } else {
                  checkCuisine(response);
                }

                let h3Element = $(`<h3>${response.title}</h3>`);
                let pElement = $(`<p>${response.instructions}</p>`);

                $("#dynamic-recipe-container").append(h3Element, pElement);
              });
          });
      });
    });

  //==========================================================
}

// // eventListener listens for a click on the #playerBtn
playerBtn.addEventListener("click", function () {
  // loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  // Grabbing/adding darkMode class to body DOM element.
  $(bodyEl).addClass("darkMode");
  if ($(bodyEl).hasClass("lightMode") === true) {
    $(bodyEl).removeClass("lightMode");
    $(bodyEl).addClass("darkMode");
  }
});

// // end #playerBtn listener

// Lights Up Event Listner
lightsUpBtn.addEventListener("click", function () {
  // Grabbing/adding darkMode class to body DOM element.
  $(bodyEl).addClass("lightMode");
});

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
// end of onYouTubeIframeAPIReady function;
