const formRef = document.querySelector('.login-form')
const inputsRef = document.querySelectorAll('.login-form input')
console.log(inputsRef)


// inputsRef.addEventListener('input', event => {
//     console.log(event.currentTarget.value === '')
// })

formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    for (const input of inputsRef) {
        if (input.value === '') {
            alert('All the inputs have to be filled')
        }
    }
    const formData = new FormData(event.currentTarget)
    console.log(formData)
    formRef.reset()
}

