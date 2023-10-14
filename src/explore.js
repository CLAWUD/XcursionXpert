function showCityPictures(city) {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = ''; // Clear previous images

  const cities = {
    'New York': [
      'megh.jpg',
      //'new-york-image2.jpg'
    ],
    'London': [
      'london-image1.jpg',
      'london-image2.jpg'
    ],
    'Paris': [
      'paris-image1.jpg',
      'paris-image2.jpg'
    ]
  };

  const cityImages = cities[city];

  if (cityImages) {
    for (const imageSrc of cityImages) {
      const imgElement = document.createElement('img');
      imgElement.src = 'assets/img/' + imageSrc; // Assuming images are in a folder named "images"
      imageContainer.appendChild(imgElement);
    }
  } else {
    imageContainer.innerHTML = 'No images available for this city.';
  }
}
