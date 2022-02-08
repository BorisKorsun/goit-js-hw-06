const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listRef = document.querySelector('.gallery')

const markup = images
  .map(obj => {
    return `<li><img class="gallery_img" src="${obj.url}" alt="${obj.alt}"></img></li>`
  })
  console.log(markup)

listRef.insertAdjacentHTML('beforeend', markup)

// const createImages = array => {
//   return array.map(image => {
//     const itemRef = document.createElement('li')
//     const imageRef = document.createElement('img')
//     imageRef.src = image.url
//     imageRef.alt = image.alt
//     imageRef.classList.add('gallery_img')
//     itemRef.appendChild(imageRef)
//     return itemRef
//   })
// }

// const elements = createImages(images)

// const listRef = document.querySelector('.gallery')
// listRef.append(...elements)

