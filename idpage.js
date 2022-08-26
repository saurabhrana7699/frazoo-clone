const overlay = document.querySelector("#overlay");
document.querySelector("#show_btn").addEventListener("click", () => {
    overlay.style.display = "block";
})

document.querySelector("#close_btn").addEventListener("click", () => {
    overlay.style.display = "none";
})
const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload(true);
    window.location.replace('/');
};