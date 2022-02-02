const ulRef = document.querySelector('#categories')
const liItemsRef = ulRef.children

console.log(`Number of categories: ${liItemsRef.length}`)

const makeCategory = obj => {
    return `Category: ${obj.firstElementChild.textContent}`
}
const countElements = obj => {
    const lastChild = obj.lastElementChild
    return `Elements: ${lastChild.children.length}`
}

console.log(makeCategory(liItemsRef[0]))
console.log(countElements(liItemsRef[0]))

console.log(makeCategory(liItemsRef[1]))
console.log(countElements(liItemsRef[1]))

console.log(makeCategory(liItemsRef[2]))
console.log(countElements(liItemsRef[2]))


