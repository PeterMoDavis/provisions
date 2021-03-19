var ingredientBtn = document.querySelector("#ingredientButton");
var ingredientList = document.getElementById("#ingredientList");
var ingredientInput = document.querySelector("#ingredientInput");
var ingredientString = "";
var recipeBtn = document.querySelector("#recipeButton");
var playerBtn = document.querySelector("#playerButton");

// listens for submission on #ingredientBtn and adds it to list
ingredientBtn.addEventListener("click", function () {
  ingredientString += ingredientInput.value + ",";
  var listItem = document.createElement('li');
  listItem.innerHTML = ingredientInput.value;
  ingredientList.appendChild(listItem);
  ingredientInput.value = "";
  console.log(ingredientString);
})
// end #ingredientBtn eventListener

// listens for click on #recipeBtn
recipeBtn.addEventListener("click", function () {
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

// eventListener listens for a click on the #playerBtn
playerBtn.addEventListener("click", function () {
  // loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

})
// end #playerBtn listener

// This function creates an <iframe> (and YouTube player)
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'H0B0Xg80RGw',
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