const div = document.getElementById('productsList')

function getProducts () {
    console.log("salam");
    div.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index )=> {
        const box = document.createElement('div')
        box.className = 'boxdi col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'
        box.innerHTML = `
         <p>${item.name}</p>
         <img style="width:150px" src='${item.image}' alt="">
        <button onclick="removeItem(${index})">Remove cart</button>`

        div.appendChild(box)
    })
}

function removeItem (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}

window.onload = () => {
    getProducts()
}