let container = document.getElementById("vegetable-container");

let data = [
    {

        price:42,
        btn:"Add"
    },
    {

        price:15,
        btn:"Add"
    },
    {

        price:5,
        btn:"Add"
    },
    {
<<<
        price:32,
        btn:"Add"
    },
    {
<<
        price:40,
        btn:"Add"
    },
    {
<<<<<
        price:41,
        btn:"Add"
    },
    {
<<<<
        price:21,
        btn:"Add"
    },
    {
<<<<
        price:67,
        btn:"Add"
    },
    {
<<<n
        price:20,
        btn:"Add"
    },
    {
<<<<
        price:28,
        btn:"Add"
    }
]

console.log(products)
products(data)

function products(data){
    data.forEach(function(el){
        let div = document.createElement("div")

        let img = document.createElement("img");
<<<<

        let name = document.createElement("p")
        name.innerText = el.name

        let weigth = document.createElement("p")
<<<<<

        let price = document.createElement("p")
        price.innerText = el.price

        let div_cart1=document.createElement("div")
        div_cart1.setAttribute("class","div_cart")
        let i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-cart-plus")

        let btn = document.createElement("button")
        btn.innerText = "Add"
        btn.setAttribute("id","btn")
<<<<<
        div_cart1.append(i,btn)
        
        div.append(img,name,weigth,price,div_cart1)
        container.append(div)

    })
}

<<<<
        price:73,
        btn:"Add"
    },
    {
<<<<
        price:79,
        btn:"Add"
    },
    {
<<<<
        price:235,
        btn:"Add"
    },
    {
<<<<<<
        price:24,
        btn:"Add"
    },
    {
<<<<
        price:139,
        btn:"Add"
    },
    {
<<<<
        price:78,
        btn:"Add"
    },
    {
<<<<
        price:53,
        btn:"Add"
    },
    {
<<<<
        price:61,
        btn:"Add"
    },
    {
<<
        price:48,
        btn:"Add"
    }
]
console.log(fruitsdata)

let container1=document.getElementById("fruits-container")
fruitproducts(fruitsdata)
function fruitproducts(fruitsdata){
    fruitsdata.forEach(function(el){
        let div = document.createElement("div")

        let img = document.createElement("img");
<<<<<

        let name = document.createElement("p")
        name.innerText = el.name

        let weigth = document.createElement("p")
<<<<n

        let price = document.createElement("p")
        price.innerText = el.price

        let div_cart=document.createElement("div")
        div_cart.setAttribute("class","div_cart")
        let i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-cart-plus")

        let btn = document.createElement("button")
        btn.innerText = "Add"
        btn.setAttribute("id","btn")
<<<<<
        div_cart.append(i,btn)
        
        div.append(img,name,weigth,price,div_cart)
        container1.append(div)

    })
}


