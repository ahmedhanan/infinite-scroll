const imageContainer = document.getElementById('images-container');
let photosArray = [];

// helper function
const setAttributes = (el, attributes) => {
  for (const key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
};

// display images
const displayPhotos = () => {
  photosArray.forEach((photo) => {
    const item = document.createElement('a');
    const img = document.createElement('img');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};
// unsplash api
const count = 1;
const apiKey = 'API_KEY';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const getPhotos = async () => {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    photosArray = data;
    displayPhotos();
  } catch (error) {
    console.log('Whooopsss!', error);
  }
};

window.addEventListener('scroll', () => {
  console.log('scrolled');
});

getPhotos();
