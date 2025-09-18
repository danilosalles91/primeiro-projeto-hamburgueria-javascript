const list = document.querySelector('ul')
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonReduceAll = document.querySelector(".reduce-all")
const buttonFilterAll = document.querySelector(".filter-all")

function formatCurrency(value) {
    const newvalue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return newvalue

}

function showAll(productArray) {
    let myLi = ''

    productArray.forEach((product) => {
        myLi += `
       <li>
            <img src=${product.src}>
            <p> ${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li>
        `
    })
    list.innerHTML = myLi
}
function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price - product.price / 10,
    }))

    showAll(newPrices)
}

function reduceAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
       <li>
            <p> O Valor total dos itens é: ${formatCurrency(totalValue)}</p>  
        </li>
        `
}

function filterAllItens() {
    const filterVegan = menuOptions.filter((product) => product.vegan === true)
    showAll(filterVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonReduceAll.addEventListener('click', reduceAllItems)
buttonFilterAll.addEventListener('click', filterAllItens)