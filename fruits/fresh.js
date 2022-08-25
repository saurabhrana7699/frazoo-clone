let data = [
    {
        image:"https://imagemaster.fraazo.com/fraazo-master/products/FCOC1.png?width=256&height=256",
        name:"Coconut",
        price:"24",
        size:"1pc"
    },
    {
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/092/original/data?width=256&height=256",
        name:"Papaya(Papita)",
        price:"42",
        size:"1pc"
    
    },{
        image:"https://imagemaster.fraazo.com/fraazo-master/products/FMOS13.png?width=256&height=256",
        name:"Mosambi",
        price:"78",
        size:"1kg"
    
    },{
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/117/original/data?width=256&height=256",
        name:"Watermelon",
        price:"54",
        size:"1pc"
    
    },{
        image:"https://imagemaster.fraazo.com/fraazo-master/products/FMUS1.png?width=256&height=256",
        name:"Muskmelon(Kharbooja)",
        price:"46",
        size:"1pc"
    
    },{
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/231/original/data?width=256&height=256",
        name:"Sun Melon",
        price:"31",
        size:"1pc"
    
    },{
        image:"https://imagemaster.fraazo.com/fraazo-master/products/FBAN24.png?width=256&height=256",
        name:"Elaichi Banana",
        price:"78",
        size:"500g"
    
    },{
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/338/original/data?width=256&height=256",
        name:"Imported Oranges",
        price:"77",
        size:"2pc"
    
    },{
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/155/original/data?width=256&height=256",
        name:"Sweet Tamarind",
        price:"74",
        size:"250g"
    
    },{
        image:"https://imagemaster.fraazo.com/fraazo-master/products/FBAN14.png?width=256&height=256",
        name:"Robusta Banana",
        price:"40",
        size:"1kg"
    
    },{
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/261/original/data?width=256&height=256",
        name:"Pomegranate(Anar)",
        price:"140",
        size:"3pc"
    
    },{
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/157/original/data?width=256&height=256",
        name:"Pineapple",
        price:"83",
        size:"1pc"
    
    },{
        image:"https://imagemaster.fraazo.com/fraazo-master/products/FAPP23.png?width=256&height=256",
        name:"Green Apple",
        price:"232",
        size:"4pc"
    
    },{
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/241/original/data?width=256&height=256",
        name:"Red Apple",
        price:"135",
        size:"4pc"
    
    },{
        image:"https://imageprod.fraazo.com/fraazo-prod/images/images/000/009/247/original/data?width=256&height=256",
        name:"Custard Apple",
        price:"155",
        size:"4pc"
    
    },{
        image:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/257/original/data?width=256&height=256",
        name:"Tender Coconut",
        price:"71",
        size:"1pc"
    
    },

]


products(data)
function products(data){
data.forEach(function(elem){

    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = elem.image

    let name = document.createElement("h3")
    name.innerText = elem.name

    let price = document.createElement("h3")
    price.innerText = "₹" + "-" + elem.price

    let size = document.createElement("p")
    size.innerText = elem.size

    let btn = document.createElement("button")
    btn.innerText = "ADD"
    btn.setAttribute("id","btn")

    div.append(img,name,price,size,btn)
    document.querySelector("#main2").append(div)
})
}