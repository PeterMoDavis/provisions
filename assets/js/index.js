alert("hello");

//fetching spoonacular for wines
fetch(
  "https://api.spoonacular.com/food/wine/pairing?food=clam+chowder&apiKey=9175773144fc417eb84578b92bed4dd9"
)
  .then((blob) => {
    return blob.json();
    console.log(blob);
  })
  .then((response) => {
    console.log(response);
  });
//fetching recipepuppy for meal ideas
fetch("http://www.recipepuppy.com/api/?i=clams,milk")
  .then((blob) => {
    return blob.json();
  })
  .then((response) => {
    console.log(response);
  });
