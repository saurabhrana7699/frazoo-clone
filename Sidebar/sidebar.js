
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
    name.addEventListener("click",function(){

        exos()
    })

    let name2 = document.createElement("h4")
    name2.innerText = " --Fresh Fruits"
name2.addEventListener("click",function(){
    exos2()
})

    let name3 = document.createElement("h4")
    name3.innerText = "--Fruit Combos"
    name3.addEventListener("click",function(){
        exos3()
    })
    div.append(name,name2,name3)
    document.querySelector("#fal").append(div)


}
   
    }
    function exos(){
       window.location.href = "../fruits/exotic.html"
    }
function exos2(){
    window.location.href = "../fruits/fresh.html"
}
function exos3(){
    window.location.href = "../fruits/fruitcombos.html"
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
    name.addEventListener("click",function(){

        exos4()
    })


    let name2 = document.createElement("h4")
    name2.innerText = "--Herbs & Leafies"
    name2.addEventListener("click",function(){

        exos5()
    })

    let name3 = document.createElement("h4")
    name3.innerText = "--Exotic Vegetables"
    name3.addEventListener("click",function(){

        exos6()
    })

    let name4 = document.createElement("h4")
    name4.innerText = "--Cuts,Peeled & Sprouts"
    name4.addEventListener("click",function(){

        exos7()
    })

    let name5 = document.createElement("h4")
    name5.innerText = "--Vegetavles Combos"
    name5.addEventListener("click",function(){

        exos8()
    })

    div.append(name,name2,name3,name4,name5)
    document.querySelector("#sabji").append(div)

    
   }
   
}

function exos4(){
    window.location.href = "../vegetables page/daily veggies.html"
}


function exos5(){
    window.location.href = "../vegetables page/herbs and leafies.html"
}


function exos6(){
    window.location.href = "../vegetables page/exotic vegetables.html"
}


function exos7(){
    window.location.href = "../vegetables page/cuts peelds sprouts.html"
}


function exos8(){
    window.location.href = "../vegetables page/vegetables combo.html"
}