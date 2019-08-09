const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imageContainer = document.getElementById('dog-image-container');
const dogBreedContainer = document.getElementById('dog-breeds')
const breedDropdown = document.getElementById('breed-dropdown')

let allBreeds = [];

dogBreedContainer.addEventListener('click', () => {
  if (event.target.style.color === 'blue') {
    event.target.style.color = ''
  } else {
    event.target.style.color = 'blue'
  }
})

breedDropdown.addEventListener('change', () => {
  const chosenOne = event.target.value
  if (chosenOne == 'all') {
    return renderBreeds(allBreeds)
  }
  const filteredArray = allBreeds.filter(breed => {
    return breed[0] === chosenOne
  })
  renderBreeds(filteredArray)
})

const renderImages = (images) => {
  images.forEach(image => {
    const newImg = document.createElement('img')
    newImg.src = image
    imageContainer.appendChild(newImg)
  })
}

const fetchImages = () => {
  fetch(imgUrl)
  .then(res => res.json())
  .then(data => renderImages(data.message))
}

const renderBreeds = (breeds) => {
  dogBreedContainer.innerHTML = '';
  breeds.forEach(breed => {
    const newLi = document.createElement('li')
    newLi.innerText = breed
    // newLi.addEventListener('click', () => {
    //   newLi.style.color = 'red'
    // })
    dogBreedContainer.appendChild(newLi)
  })
}

const fetchBreeds = () => {
  fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
      allBreeds = Object.keys(data.message)
      renderBreeds(allBreeds)
    })
}

/**
 * Alternative to include all sub breeds as well:
 */
// const fetchBreeds = () => {
//   fetch(breedUrl)
//     .then(res => res.json())
//     .then(data => {
//       for (const key in data.message) {
//         if (data.message[key]) {
//           if (data.message[key].length) {
//             data.message[key].forEach(breed => {
//               allBreeds.push(breed + ' ' + key)
//             })
//           } else {
//             allBreeds.push(key)
//           }
//         }
//       }
//       renderBreeds(allBreeds)
//     })
// }

const init = () => {
  fetchImages()
  fetchBreeds()
}
init()
