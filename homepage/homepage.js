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
        img:'https://imagemaster.fraazo.com/fraazo-master/products/VGAR32.png?width=256&height=256&format=webp',
        name:"Peeled Garlic",
        weigth:"10 g",
        price:32,
        btn:"Add"
    },
    {
        img:'https://imagemaster.fraazo.com/fraazo-master/products/VGAR32.png?width=256&height=256&format=webp',
        name:"Peeled Garlic",
        weigth:"10 g",
        price:32,
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

        let btn = document.createElement("button")
        btn.innerText = "Add"
        btn.setAttribute("id","btn")
        
        div.append(img,name,weigth,price,btn)
        container.append(div)

    })
}