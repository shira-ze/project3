var giphyAPIkey = "key goes here";

function sendApiRequest(){
  var userInput = document.getElementById("input").value;

  if(userInput === ""){return;}
  var newChild = document.createElement("div");
  newChild.innerText = userInput;
  document.body.appendChild(newChild);

  var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${giphyAPIkey}`;
  console.log(giphyApiUrl);
  fetch(giphyApiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json);
      var img1 = document.createElement("img");
      var img2 = document.createElement("img");

      img1.src = json["data"][0]["images"]["fixed_height"]["url"];
      img2.src = json["data"][1]["images"]["fixed_height"]["url"];
      document.body.appendChild(img1)
      document.body.appendChild(img2)

    })
}
