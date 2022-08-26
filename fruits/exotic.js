let data = [
{
    image:"https://imagemaster.fraazo.com/fraazo-master/products/FAVO21.png?width=256&height=256",
    name:"Indian Avocado",
    price:73,
    size:"1pc"
},
{
    image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/432/original/data?width=256&height=256",
    name:"Grapefruit",
    price:53,
    size:"1pc"
},
{
    image:"https://imagemaster.fraazo.com/fraazo-master/products/FKIW1.png?width=256&height=256",
    name:"Zepri Golden Kiwi",
    price:139,
    size:"1pc"
},
{
    image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/235/original/data?width=256&height=256",
    name:"Imported Avocado",
    price:101,
    size:"1pc"
},
{
    image:"https://imageprod.fraazo.com/fraazo-prod/images/images/000/009/243/original/data?width=256&height=256",
    name:"Pear Beauty",
    price:127,
    size:"500g"
},
{
    image:"https://imagemaster.fraazo.com/fraazo-master/products/FDRA1.png?width=256&height=256",
    name:"Dragon Fruit",
    price:77,
    size:"1pc"
},
{
    image:"https://imagemaster.fraazo.com/fraazo-master/products/FBLU1.png?width=256&height=256",
    name:"Blueberry",
    price:200,
    size:"1pkt"
},



]
products(data)
function products(data){
data.forEach(function(elem){

    let div = document.createElement("div")
  


    let img = document.createElement("img")
    img.src = elem.image
    img.addEventListener("click",function(){
        addtocart(elem)
    })

    let name = document.createElement("h3")
    name.innerText = elem.name

    let price = document.createElement("h3")
    price.innerText = "₹" + "-" + elem.price

    let size = document.createElement("p")
    size.innerText = elem.size

    let btn = document.createElement("button")
    btn.innerText = "ADD"
    btn.setAttribute("id","btn")
    btn.addEventListener("click",function(){
       buy(elem)
    })

    div.append(img,name,price,size,btn)
    document.querySelector("#main").append(div)
})
}
let arr = []
function addtocart(elem){
    arr.push(elem)
    localStorage.setItem("details",JSON.stringify(arr))
    window.location.href="details.html"
}

let deta = JSON.parse(localStorage.getItem("cartdata")) || []
function buy(elem){
   deta.push(elem)
   localStorage.setItem("cartdata",JSON.stringify(deta))
}