//j's key e5c67ec0126745b8b0354ae98fcaed4d

//pete's key 9175773144fc417eb84578b92bed4dd9

var ingredients = "tomatoes";

fetch(
  `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&apiKey=e5c67ec0126745b8b0354ae98fcaed4d`
)
  .then((blob) => {
    return blob.json();
  })
  .then((response) => {
    // console.log(response);
    // making variable for recipe array
    var recipes = response.results;
    //looping through recipe titles
    for (let i = 0; i < recipes.length; i++) {
      console.log(recipes[i].title);
      //select ul
      var ulElement = $("ul");
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
              $("#recipe-container").append(h1Element, pElement, pElement2);
            });
        });
    });
  });
