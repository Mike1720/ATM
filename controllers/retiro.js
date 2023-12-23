let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));


const saldo = document.getElementById("saldo");
const montoInput = document.getElementById("montoInput");
const homeBtn = document.getElementById("homeBtn");



let userSaldo = loggedUser.saldo;
let montoValue = "";

saldo.textContent = "$" + loggedUser.saldo;


function retiro100() {
    if (userSaldo >= 100 && userSaldo >= 10) {
        userSaldo = userSaldo - 100
        saldo.textContent = "$" + userSaldo
        localStorage.setItem("userSaldo",JSON.stringify(userSaldo))

    } else {
        return alert("saldo insuficiente");
    }
};

function retiro200() {
    if (userSaldo >= 200) {
        userSaldo = userSaldo - 200
        saldo.textContent = "$" + userSaldo
        localStorage.setItem("userSaldo",JSON.stringify(userSaldo))

    } else {
        return alert("saldo insuficiente");
    }
};
function retiro400() {
    if (userSaldo >= 400) {
        userSaldo = userSaldo - 400
        saldo.textContent = "$" + userSaldo
        localStorage.setItem("userSaldo",JSON.stringify(userSaldo))

    } else {
        return alert("saldo insuficiente");
    }
};
function retiro500() {
    if (userSaldo >= 500) {
        userSaldo = userSaldo - 500
        saldo.textContent = "$" + userSaldo
        localStorage.setItem("userSaldo",JSON.stringify(userSaldo))

    } else {
        return alert("saldo insuficiente");
    }
};
function retiro600() {
    if (userSaldo >= 600) {
        userSaldo = userSaldo - 600
        saldo.textContent = "$" + userSaldo
        localStorage.setItem("userSaldo",JSON.stringify(userSaldo))

    } else {
        return alert("saldo insuficiente");
    }
};
function retiro800() {
    if (userSaldo >= 800) {
        userSaldo = userSaldo - 800
        saldo.textContent = "$" + userSaldo
        localStorage.setItem("userSaldo",JSON.stringify(userSaldo))

    } else {
        return alert("saldo insuficiente");
    }
};



montoInput.addEventListener("change", function (event) {

    montoValue = event.target.value;
    // console.log(montoValue);
    if (montoValue <= userSaldo) {
        userSaldo = userSaldo - montoValue;
        // console.log(userSaldo);
        saldo.textContent = "$" + userSaldo

        localStorage.setItem("userSaldo",JSON.stringify(userSaldo))
    } 
    else {
        return alert("Operación invalida")
    }


});




homeBtn.addEventListener("click", function (event) {
    return (location.href = "./home.html")
});


