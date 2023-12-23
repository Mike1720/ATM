// let oldUser = JSON.parse(localStorage.getItem("loggedUser"));
// if (oldUser) {
//     location.href = "./home.html";
// }

/* CUENTAS DE USUARIOS */
const users = [
    { usuario: 'Edson', password: "vVv9g5P5Qz", saldo: 200 },
    { usuario: 'Ameyali', password: "SF2UI626Ka", saldo: 290 },
    { usuario: 'Karen', password: "ulN42M11w0", saldo: 67 },
];


/* ELEMTOS HTML */
const userInput = document.getElementById("user");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");


/* VALORES */
let loggedUser = null;
let userValue = "";
let passwordValue = "";



/* EVENTOS */
userInput.addEventListener("change", function (event) {
    userValue = event.target.value;
    console.log(userValue);
});

passwordInput.addEventListener("change", function (event) {
    passwordValue = event.target.value;
    console.log(passwordValue);
});

loginButton.addEventListener("click", function (event) {
    let foundUser = users.find(
        (user) => user.usuario === userValue && user.password === passwordValue
    );

    console.log("usuario", foundUser);

    if (foundUser) {
        loggedUser = foundUser;

        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        return (location.href = "./home.html");
    }
});
















// function validation() {
//     let foundUser = users.find(
//         (user) => user.usuario === userValue && user.password === passwordValue
//     )
//     if (foundUser) {
//         loggedUser = foundUser
//         localStorage.setItem("LoggedUser", JSON.stringify(loggedUser))
//     }
//     // return alert("Usuario loggeado correctamente")

//     return (location.href = "./home.html")
// }