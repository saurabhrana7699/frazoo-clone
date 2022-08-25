let container = document.getElementById("vegetable-container");

let data = [
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/EBAB12.png?width=256&height=256&format=webp',
        name:"Baby Corn",
        weigth:"200 g",
        price:42,
        btn:"Add"
    },
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/LCOR21.png?width=256&height=256&format=webp',
        name:"Corriander Leaves (Dhania/Kothimbir",
        weigth:"100 g",
        price:15,
        btn:"Add"
    },
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/LCUR11.png?width=256&height=256&format=webp',
        name:"Curry Leaves",
        weigth:"50 g",
        price:5,
        btn:"Add"
    },
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/VGAR32.png?width=256&height=256&format=webp',
        name:"Peeled Garlic",
        weigth:"10 g",
        price:32,
        btn:"Add"
    },
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/ELET22.png?width=256&height=256&format=webp',
        name:"Lettuce iceberg",
        weigth:"1 pc",
        price:40,
        btn:"Add"
    },
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/EMUS2.png?width=256&height=256&format=webp',
        name:"Button Mushroom",
        weigth:"1 pkt",
        price:41,
        btn:"Add"
    },
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/BONI11.png?width=256&height=256&format=webp',
        name:"Onion",
        weigth:"1 kg",
        price:21,
        btn:"Add"
    },
    {
        img:'https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/389/original/data?width=256&height=256&format=webp',
        name:"Fresh Salad Combo (500 g Carrot + 500 g Cucumber)",
        weigth:"1 combo",
        price:67,
        btn:"Add"
    },
    {
        img:'https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/661/original/data?width=256&height=256&format=webp',
        name:"Bengal Gram Sprouts",
        weigth:"200 g",
        price:20,
        btn:"Add"
    },
    {
        img:'https://imageprod.fraazo.com/fraazo-prod/images/images/000/006/605/original/data?width=256&height=256&format=webp',
        name:"Tomato",
        weigth:"1 kg",
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
        img.src = el.img

        let name = document.createElement("p")
        name.innerText = el.name

        let weigth = document.createElement("p")
        weigth.innerText = el.weigth

        let price = document.createElement("p")
        price.innerText = el.price

        let div_cart1=document.createElement("div")
        div_cart1.setAttribute("class","div_cart")
        let i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-cart-plus")

        let btn = document.createElement("button")
        btn.innerText = "Add"
        btn.setAttribute("id","btn")
        div_cart1.append(i,btn)
        
        div.append(img,name,weigth,price,div_cart1)
        container.append(div)

    })
}

let fruitsdata = [
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/FAVO21.png?width=256&height=256&format=webp',
        name:"Indain Avacodo",
        weigth:"1 pc",
        price:73,
        btn:"Add"
    },
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/FBAN24.png?width=256&height=256&format=webp',
        name:"Elachi Banana (Yellaki)",
        weigth:"500 g",
        price:79,
        btn:"Add"
    },
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/FBLU1.png?width=256&height=256&format=webp',
        name:"Blurberry",
        weigth:"1 pkt",
        price:235,
        btn:"Add"
    },
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/FCOC1.png?width=256&height=256&format=webp',
        name:"Coconut",
        weigth:"1 pc",
        price:24,
        btn:"Add"
    },
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/FKIW1.png?width=256&height=256&format=webp',
        name:"Zespri Golden Kiwi",
        weigth:"1 pkt",
        price:139,
        btn:"Add"
    },
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/FMOS13.png?width=256&height=256&format=webp',
        name:"Mosambi (Sweet Lime)",
        weigth:"1 kg",
        price:78,
        btn:"Add"
    },
    {
        img:'https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/117/original/data?width=256&height=256&format=webp',
        name:"Watemelon",
        weigth:"1 pc",
        price:53,
        btn:"Add"
    },
    {
        img:'https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/248/original/data?width=256&height=256&format=webp',
        name:"Red Banana",
        weigth:"500 g",
        price:61,
        btn:"Add"
    },
    {
        img:'https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/432/original/data?width=256&height=256&format=webp',
        name:"Grapefruit",
        weigth:"1 pc",
        price:53,
        btn:"Add"
    },
    {
        img:'https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/445/original/data?width=256&height=256&format=webp',
        name:"Coconut Combo (2 pc Coconuts)",
        weigth:"1 (combo)",
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
        img.src = el.img

        let name = document.createElement("p")
        name.innerText = el.name

        let weigth = document.createElement("p")
        weigth.innerText = el.weigth

        let price = document.createElement("p")
        price.innerText = el.price

        let div_cart=document.createElement("div")
        div_cart.setAttribute("class","div_cart")
        let i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-cart-plus")

        let btn = document.createElement("button")
        btn.innerText = "Add"
        btn.setAttribute("id","btn")
        div_cart.append(i,btn)
        
        div.append(img,name,weigth,price,div_cart)
        container1.append(div)

    })
}


let sliders = [
    {
        image1:"https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png",
        image2:"https://imageprod.fraazo.com/fraazo-prod/web_ban/4923.png",
        image3:"https://imageprod.fraazo.com/fraazo-prod/web_ban/4986.png",
        image4:"https://imageprod.fraazo.com/fraazo-prod/web_ban/4985.png"
    }
]
// console.log(sliding)

// let container = document.getElementById("")
// let i=0
// let div=document.querySelector("#slide-image")
// setInterval(function(){
//     if(i===sliders.length){
//         i=0
//     }
//     let img = document.createElement("img");
//     img.src = sliders[i];
//     // div.innerHTML=null

//     div.append(img);
//     i++;
// },2000)