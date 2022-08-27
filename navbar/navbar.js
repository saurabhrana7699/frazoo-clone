let dataa = JSON.parse(localStorage.getItem("newlist")) || []
console.log(dataa)

addname(dataa)
function addname(dataa){
dataa.forEach(function(elem){
let div = document.createElement("div")
    let name = document.createElement("p")
    name.innerText =    " - " +elem.name +"   "

  

 
    div.append(name)
    document.querySelector("#mortalhu").append(div)

})
}

