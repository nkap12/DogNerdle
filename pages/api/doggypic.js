const url = "https://dog.ceo/api/breeds/image/random";

// returns 4 urls with dog
async function makeAPICall() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function doggypic() {
  const results = [];
  
  for (let i = 0; i < 4; i++) {
    const data = await makeAPICall();
    results.push(data);
  }
  
  // get random image from api call to display
  const randomIndex = Math.floor(Math.random() * results.length);
  const randomElement = results[randomIndex];
  console.log(randomElement); // prints a random element from the array
  
  const imageUrl = randomElement.message;
  const imageBreedName =  displayBreedName(randomElement.message);
  const breedName1 = displayBreedName(results[0].message);
  const breedName2 = displayBreedName(results[1].message);
  const breedName3 = displayBreedName(results[2].message);
  const breedName4 = displayBreedName(results[3].message);
  
  //console.log(data.message);

  return { imgUrl: imageUrl, imageBreedName, breedName1, breedName2, breedName3, breedName4};
}

// returns the breedname from the url
function displayBreedName(url) {
  const regex = /\/breeds\/([a-zA-Z-]+)/;
  const match = url.match(regex);
  const breedName = match[1];
  return breedName;
}





    