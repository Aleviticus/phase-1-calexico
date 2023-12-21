fetch("http://localhost:3000/menu")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        for(let food of data)
        renderFood(food)
    foodDetails(data[0])
    })


let renderFood = (foodObject) => {

    let menu = document.getElementById('menu-items')

    let name = document.createElement('span')
    name.textContent = foodObject.name

    menu.append(name)

    name.addEventListener('click', () => {
        foodDetails(foodObject)
    })
}

let foodDetails = (foodObject) => {
    
    let dish = document.getElementById('dish')
    console.log(dish)

    let image = document.getElementById('dish-image')
    image.src = foodObject.image

    let name = document.getElementById('dish-name')
    name.textContent = foodObject.name

    let description = document.getElementById('dish-description')
    description.textContent = foodObject.description

    let price = document.getElementById('dish-price')
    price.textContent = foodObject.price

}

    // let form = document.getElementById('cart-form')
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     let inputValue = parseFloat(e.target['cart-amount'].value)
    //     console.log(inputValue)
    //     let cartValue = parseInt(cartNumber.textContent)
    //     let cartNumber = document.getElementById('number-in-cart')
    //     cartNumber.textContent = inputValue + cartValue
    // })
    let form = document.getElementById('cart-form');
    let cartNumber = document.getElementById('number-in-cart');
    let cartValue = parseInt(cartNumber.textContent); // Get the initial cart value
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let inputValue = parseInt(e.target['cart-amount'].value);
        console.log(inputValue);
        cartValue = cartValue + inputValue; // Add the new input value to the existing cart value
        cartNumber.textContent = cartValue;
    });