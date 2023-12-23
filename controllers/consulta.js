let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
let userSaldo = JSON.parse(localStorage.getItem("userSaldo"))

console.log(userSaldo);

const saldo = document.getElementById("saldo");
const retiroBtn = document.getElementById("retiroBtn")
const homeBtn = document.getElementById("homeBtn")


saldo.textContent = "$" + userSaldo

retiroBtn.addEventListener("click", function (event) {
    return (location.href = "./retiro.html")
})

homeBtn.addEventListener("click", function(event){
    return (location.href = "./home.html")
})
