let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));


/* ELEMENTOS HTML */
const consultaBtn = document.getElementById("consultaBtn");
const retiroBtn = document.getElementById("retiroBtn");
const logOutBtn = document.getElementById("logOutBtn")
const nombreUsuario = document.getElementById("nombreUsuario")



nombreUsuario.textContent = loggedUser.usuario


/* EVENTOS */
consultaBtn.addEventListener("click", function (event) {
    return (location.href = "./consulta.html")
});

retiroBtn.addEventListener("click", function (event) {
    return (location.href = "./retiro.html")
});

logOutBtn.addEventListener("click", function (event) {
    localStorage.removeItem("loggedUser");
    return (location.href = "./index.html");

});




