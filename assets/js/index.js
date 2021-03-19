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