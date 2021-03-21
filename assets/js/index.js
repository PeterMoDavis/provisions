var ingredientBtn = document.querySelector("#ingredientButton");
var ingredientList = document.querySelector("#dynamic-ingredient-list");
console.log(ingredientList);
var ingredientInput = document.querySelector("#ingredientInput");
var ulElement = $("#recipeList");
console.log(ulElement);
var ingredientString = "";
var recipeBtn = document.querySelector("#recipeButton");
var playerBtn = document.querySelector("#playerButton");
const jKey = "e5c67ec0126745b8b0354ae98fcaed4d";
const peteKey = "9175773144fc417eb84578b92bed4dd9";
const peteKey2 = "50da326f05fc433585a10d5614cc25de";
// var apiKey = peteKey2;
var bodyEl = document.querySelector(".body");
var lightsUpBtn = document.querySelector("#lightsUpBtn");

// listens for submission on #ingredientBtn and adds it to list
ingredientBtn.addEventListener("click", function () {
  console.log("click");
  ingredientString += ingredientInput.value + ",";
  var listItem = document.createElement("li");
  listItem.innerHTML = ingredientInput.value;
  console.log(ingredientList);
  ingredientList.append(listItem);
  ingredientInput.value = "";
  console.log(ingredientString);
});
// end #ingredientBtn eventListener

// listens for click on #recipeBtn
recipeBtn.addEventListener("click", function () {
  console.log(ingredientString);
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

//Currently Jared's api key is in url. Jared did not make it into a variable
function getEntrees() {
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredientString}&apiKey=d88d0fb8dd284cb08b7378846adb0bf0`
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
          `https://api.spoonacular.com/recipes/complexSearch?query=${e.target.textContent}&apiKey=d88d0fb8dd284cb08b7378846adb0bf0`
        )
          .then((blob) => {
            return blob.json();
          })
          .then((response) => {
            console.log(response);
            var chosenRecipeId = response.results[0].id;

            fetch(
              `https://api.spoonacular.com/recipes/${chosenRecipeId}/information/?apiKey=d88d0fb8dd284cb08b7378846adb0bf0`
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
                  //turning off event listener
                  ulElement.off();

                  ulElement.append(liElement);
                }

                let h3Element = $(`<h3>${response.title}</h3>`);
                let pElement = $(`<p>${response.instructions}</p>`);
                let pElement2 = $(`<p>${response.winePairing.pairingText}</p>`);

                $("#dynamic-recipe-container").append(
                  h3Element,
                  pElement,
                  pElement2
                );
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
  if($(bodyEl).hasClass("lightMode") === true ){
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
