let name = document.querySelector('#name')
let amount = document.querySelector('#amount')
let total = document.querySelector('#total')

function addItem (){
    let item = document.createElement('li')
    item.innerText = `${name.value} $${amount.value}`
    name.value = ''
    amount.value = ''

    let button = document.createElement('button')
    button.addEventListener('click', removeItem)
    item.append(button)

    document.querySelector('ul').appendChild(item)
}
function removeItem(e){
    e.target.parentNode.remove()
}
