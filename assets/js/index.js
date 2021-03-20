var ingredientBtn = document.querySelector("#ingredientButton");
var ingredientList = document.getElementById("#ingredientList");
var ingredientInput = document.querySelector("#ingredientInput");
var ulElement = $("#recipeList");
var ingredientString = "";
var recipeBtn = document.querySelector("#recipeButton");
var playerBtn = document.querySelector("#playerButton");
const jKey = "e5c67ec0126745b8b0354ae98fcaed4d"
const peteKey = "9175773144fc417eb84578b92bed4dd9"
var apiKey = peteKey;

// listens for submission on #ingredientBtn and adds it to list
ingredientBtn.addEventListener("click", function () {
  ingredientString += ingredientInput.value + ",";
  var listItem = document.createElement("li");
  listItem.innerHTML = ingredientInput.value;
  ingredientList.appendChild(listItem);
  ingredientInput.value = "";
  console.log(ingredientString);
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
      console.log(response);
      // making variable for recipe array
      var recipes = response.results;
      //looping through recipe titles
      for (let i = 0; i < recipes.length; i++) {
        console.log(recipes[i].title);
        //create li
        var liElement = $(`<li>${recipes[i].title}</li>`);
        //append li to ul
        ulElement.append(liElement);
        //add even listeners to ul and lis
      }
      ulElement.on("click", liElement, function (e) {
        console.log(e.target.textContent);
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${e.target.textContent}&apiKey=e5c67ec0126745b8b0354ae98fcaed4d`
        )
          .then((blob) => {
            return blob.json();
          })
          .then((response) => {
            var chosenRecipeId = response.results[0].id;
            //   console.log(chosenRecipeId);
            fetch(
              `https://api.spoonacular.com/recipes/${chosenRecipeId}/information/?apiKey=e5c67ec0126745b8b0354ae98fcaed4d`
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

                let h1Element = $(`<h1>${response.title}</h1>`);
                let pElement = $(`<p>${response.instructions}</p>`);
                let pElement2 = $(`<p>${response.pairedWines}</p>`);
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
