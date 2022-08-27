const overlay = document.querySelector("#overlay");
document.querySelector("#show_btn").addEventListener("click", () => {
    overlay.style.display = "block";
})

document.querySelector("#close_btn").addEventListener("click", () => {
    overlay.style.display = "none";
})


let data = JSON.parse(localStorage.getItem("newlist")) || [];
console.log(data)

addname(data)
function addname(data){
data.forEach(function(elem){
let div = document.createElement("div")
    let name = document.createElement("h1")
    name.innerText = elem.name +"   "

    let surname = document.createElement("h1")
    surname.innerText = "  -  "+ elem.surname

 
    div.append(name,surname)
    document.querySelector("#your_order").append(div)

})
}













function append(data) {
    let num = document.querySelector("#number");

    data.forEach(function (el) {
        let p = document.createElement("p");
        p.innerText = el.number;

        num.append(p);
    })
}
append(data);

let logout = document.querySelector("#logout").addEventListener('click', logoutfun);
function logoutfun() {
    window.localStorage.clear();
    window.location.reload(true);
}
let submit = document.querySelector("#submit").addEventListener("click", submitfun)
let datasubmit = JSON.parse(localStorage.getItem("details")) || [];
function submitfun() {


    let first = document.querySelector("#first").value

    let last = document.querySelector("#last").value

    let email = document.querySelector("#email").value

    let number = document.querySelector("#number").value

    let details1 = new alldetails(first, last, email, number);

    datasubmit.push(details1);
    localStorage.setItem("details", JSON.stringify(datasubmit))

}

function alldetails(first, last, email, number) {
    this.first = first,
        this.last = last,
        this.email = email,
        this.number = number
}