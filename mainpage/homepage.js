let container = document.getElementById("vegetable-container");

let data = [
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/EBAB12.png?width=256&height=256&format=webp',
        name:"Baby Corn",
       size:"200 g",
        price:42,
        btn:"Add"
    },
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/LCOR21.png?width=256&height=256&format=webp',
        name:"Corriander Leaves (Dhania/Kothimbir",
        size:"100 g",
        price:15,
        btn:"Add"
    },
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/LCUR11.png?width=256&height=256&format=webp',
        name:"Curry Leaves",
        size:"50 g",
        price:5,
        btn:"Add"
    },
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/VGAR32.png?width=256&height=256&format=webp',
        name:"Peeled Garlic",
        size:"10 g",
        price:32,
        btn:"Add"
    },
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/ELET22.png?width=256&height=256&format=webp',
        name:"Lettuce iceberg",
        size:"1 pc",
        price:40,
        btn:"Add"
    },
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/EMUS2.png?width=256&height=256&format=webp',
        name:"Button Mushroom",
        size:"1 pkt",
        price:41,
        btn:"Add"
    },
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/BONI11.png?width=256&height=256&format=webp',
        name:"Onion",
        size:"1 kg",
        price:21,
        btn:"Add"
    },
    {
        image:'https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/389/original/data?width=256&height=256&format=webp',
        name:"Fresh Salad Combo (500 g Carrot + 500 g Cucumber)",
        size:"1 combo",
        price:67,
        btn:"Add"
    },
    {
        image:'https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/661/original/data?width=256&height=256&format=webp',
        name:"Bengal Gram Sprouts",
        size:"200 g",
        price:20,
        btn:"Add"
    },
    {
        image:'https://imageprod.fraazo.com/fraazo-prod/images/images/000/006/605/original/data?width=256&height=256&format=webp',
        name:"Tomato",
        size:"1 kg",
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
        img.src = el.image
        img.addEventListener("click",function(){
            addtocart(el)
        })


        let name = document.createElement("p")
        name.innerText = el.name

        let weigth = document.createElement("p")
        weigth.innerText = el.size

        let price = document.createElement("p")
        price.innerText = el.price

        let div_cart1=document.createElement("div")
        div_cart1.setAttribute("class","div_cart")
        let i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-cart-plus")

        let btn = document.createElement("button")
        btn.innerText = "Add"
        btn.setAttribute("id","btn")
        btn.addEventListener("click",function(){
            buy(el)
         })
        div_cart1.append(i,btn)
        
        div.append(img,name,weigth,price,div_cart1)
        container.append(div)

    })
}



let fruitsdata = [
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/FAVO21.png?width=256&height=256&format=webp',
        name:"Indain Avacodo",
        size:"1 pc",
        price:73,
        btn:"Add"
    },
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/FBAN24.png?width=256&height=256&format=webp',
        name:"Elachi Banana (Yellaki)",
        size:"500 g",
        price:79,
        btn:"Add"
    },
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/FBLU1.png?width=256&height=256&format=webp',
        name:"Blurberry",
        size:"1 pkt",
        price:235,
        btn:"Add"
    },
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/FCOC1.png?width=256&height=256&format=webp',
        name:"Coconut",
        size:"1 pc",
        price:24,
        btn:"Add"
    },
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/FKIW1.png?width=256&height=256&format=webp',
        name:"Zespri Golden Kiwi",
        size:"1 pkt",
        price:139,
        btn:"Add"
    },
    {
        image:'https://imagemaster.fraazo.com/fraazo-master/products/FMOS13.png?width=256&height=256&format=webp',
        name:"Mosambi (Sweet Lime)",
        size:"1 kg",
        price:78,
        btn:"Add"
    },
    {
        image:'https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/117/original/data?width=256&height=256&format=webp',
        name:"Watemelon",
        size:"1 pc",
        price:53,
        btn:"Add"
    },
    {
        image:'https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/248/original/data?width=256&height=256&format=webp',
        name:"Red Banana",
        size:"500 g",
        price:61,
        btn:"Add"
    },
    {
        image:'https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/432/original/data?width=256&height=256&format=webp',
        name:"Grapefruit",
        size:"1 pc",
        price:53,
        btn:"Add"
    },
    {
        image:'https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/445/original/data?width=256&height=256&format=webp',
        name:"Coconut Combo (2 pc Coconuts)",
        size:"1 (combo)",
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
        img.src = el.image
        img.addEventListener("click",function(){
            addtocart(el)
        })

        let name = document.createElement("p")
        name.innerText = el.name

        let weigth = document.createElement("p")
        weigth.innerText = el.size

        let price = document.createElement("p")
        price.innerText = el.price

        let div_cart=document.createElement("div")
        div_cart.setAttribute("class","div_cart")
        let i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-cart-plus")

        let btn = document.createElement("button")
        btn.innerText = "Add"
        btn.setAttribute("id","btn")
        btn.addEventListener("click",function(){
            buy(el)
         })
        div_cart.append(i,btn)
        
        div.append(img,name,weigth,price,div_cart)
        container1.append(div)

    })
}

let arr = []
function addtocart(el){
    arr.push(el)
    localStorage.setItem("details",JSON.stringify(arr))
   window.location.href= "./fruits/details.html"

}



let deta = JSON.parse(localStorage.getItem("cartdata")) || []
function buy(el){
   deta.push(el)
   localStorage.setItem("cartdata",JSON.stringify(deta))
}

