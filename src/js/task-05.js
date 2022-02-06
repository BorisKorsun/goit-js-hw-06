const inputRef = document.querySelector('#name-input') 
const nameRef = document.querySelector('#name-output')
console.log(nameRef)

inputRef.addEventListener('input', onInput)
function onInput(event) {
    nameRef.textContent = event.currentTarget.value
}