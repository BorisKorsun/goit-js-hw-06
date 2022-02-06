function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')
console.log(body)
const btnRef = document.querySelector('.change-color')
console.log(btnRef)

btnRef.addEventListener('click', onBtnClick)

function onBtnClick(event) {
  const randomColor = getRandomHexColor()
  body.style.backgroundColor = randomColor
}