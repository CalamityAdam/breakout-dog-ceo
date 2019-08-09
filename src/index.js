const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imageContainer = document.getElementById('dog-image-container')

const fetchImages = () => {
  fetch(imgUrl)
    .then(res => res.json())
    .then(data => renderImages(data.message))
}
const fetchBreeds = () => {
  fetch(breedUrl)
    .then(res => res.json())
    // .then(data => console.log(Object.keys(data.message)))
    .then(data => renderBreeds(Object.keys(data.message)))
}

const renderImages = (images) => {
  images.forEach(img => {
    const newImg = document.createElement('img')
    newImg.src = img
    imageContainer.appendChild(newImg)
  })
}

const renderBreeds = (breeds) => {
  
}


const init = () => {
  fetchImages()
  fetchBreeds()
}
init()
