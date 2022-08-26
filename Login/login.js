document.querySelector("#pressbtn").addEventListener("click",runkrdo)
let arr = []
function runkrdo(){

    let name = document.querySelector("#typeinput").value

    let surname = document.querySelector("#typeinput2").value

    let email = document.querySelector("#typeinput3").value

    let number = document.querySelector("#typeinput4").value

  
let heros = new consumers(name,surname,email,number)
arr.push(heros)
  
  localStorage.setItem("newlist",JSON.stringify(arr))
}

function consumers(name,surname,email,number){
    this.name =name
    this.surname =surname
    this.email =email
    this.number = number
}