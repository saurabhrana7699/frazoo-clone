let data = [

    {
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/445/original/data?width=256&height=256",
        name:"Coconut Combo(2 pcs Coconuts)",
        price:"48",
        size:"1 Combo"
    },
    {
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/204/original/data?width=256&height=256",
        name:"Cooler Fruit(1pc Waremelon + 1pc Papaya)",
        price:"96",
        size:"1 Combo"
    
    },
    {
        image:"https://imagemaster.fraazo.com/fraazo-master/products/FC004.png?width=256&height=256",
        name:"Fruit Juice Combo",
        price:"142",
        size:"1 Combo"
    
    },
    {
        image:"https://imageprod.fraazo.com/fraazo-prod/images/images/000/009/244/original/data?width=256&height=256",
        name:"Tasty Combo(4pc Royal Gala + 1kg Robusta Banana)",
        price:"173",
        size:"1 Combo"
    
    },
    {
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/447/original/data?width=256&height=256",
        name:"Shubh Combo (Red Delicious Apple Robusta Banana)",
        price:"199",
        size:"1 Combo"
    
    },
    {
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/446/original/data?width=256&height=256",
        name:"Prasad Combo (Royal Gala Apple, Green Pear, Robusta Banana)",
        price:"296",
        size:"1 Combo"
    
    },
    {
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/442/original/data?width=256&height=256",
        name:"Smoothie Combo (1 kg Robusta Banana + 1 pkt Blueberry)",
        price:"240",
        size:"1 Combo"
    
    },
]

products(data)
function products(data){
data.forEach(function(elem){

    let div = document.createElement("div")
   

    let img = document.createElement("img")
    img.src = elem.image

    let name = document.createElement("p")
    name.innerText = elem.name

    let price = document.createElement("h3")
    price.innerText = "₹" + "-" + elem.price

    let size = document.createElement("p")
    size.innerText = elem.size

    let btn = document.createElement("button")
    btn.innerText = "ADD"
    btn.setAttribute("id","btn")

    div.append(img,name,price,size,btn)
    document.querySelector("#main3").append(div)
})
}
