
   let x =  document.querySelector("#fruits")
   x.addEventListener("click",fruits)
   let count =0
  
    function fruits(){
   
count++
if(count===1){

   let fal = document.querySelector("#fruits")
   fal.innerText = "- Fruits"
  

   
    let div = document.createElement("div")
      

    let name = document.createElement("h4")
    name.innerText = "--Exotic Fruits"

    let name2 = document.createElement("h4")
    name2.innerText = " --Fresh Fruits"
    let name3 = document.createElement("h4")
    name3.innerText = "--Fruit Combos"

    div.append(name,name2,name3)
    document.querySelector("#fal").append(div)


}


      
    }





let y = document.querySelector("#vege")
y.addEventListener("click",vege)
let sum=0
function vege(){
   sum++
   if(sum===1){

    document.querySelector("#vege").innerText = "- Vegetables"
  
    let div = document.createElement("div")
 
    let name = document.createElement("h4")
    name.innerText = "--Daily Veggies"

    let name2 = document.createElement("h4")
    name2.innerText = "--Herbs & Leafies"

    let name3 = document.createElement("h4")
    name3.innerText = "--Exotic Vegetables"

    let name4 = document.createElement("h4")
    name4.innerText = "--Cuts,Peeled & Sprouts"

    let name5 = document.createElement("h4")
    name5.innerText = "--Vegetavles Combos"

    div.append(name,name2,name3,name4,name5)
    document.querySelector("#sabji").append(div)

    
   }
   
 
 
 

}