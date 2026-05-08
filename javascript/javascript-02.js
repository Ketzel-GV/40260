// let b1 = document.getElementById("b1")
// let b2 = document.getElementById("b2")
// let b3 = document.getElementById("b3")
// let b4 = document.getElementById("b4")
// let b5 = document.getElementById("b5")
// let b6 = document.getElementById("b6")
// let b7 = document.getElementById("b7")
// let b8 = document.getElementById("b8")
// let b9 = document.getElementById("b9")
// let b0 = document.getElementById("b0")

let resultado = document.getElementById("resultado");
let botones = document.getElementsByTagName("button");

let valorAnterior = "";
let operacionActual = null;


for (let boton of botones) {
    if (boton.id === "eq") {
        boton.addEventListener("click", calcular);
    } else if (boton.id === "lim") {
        boton.addEventListener("click", limpiar);
    } else if (boton.classList.contains("operador")) {
        boton.addEventListener("click", prepararOperacion);
    } else {
        boton.addEventListener("click", agregarNumero);
    }
}

function agregarNumero(e) {
    resultado.value += e.target.innerText;
}

function prepararOperacion(e) {
    valorAnterior = resultado.value;
    operacionActual = e.target.innerText;
    resultado.value = ""; 
}

function limpiar() {
    resultado.value = "";
    valorAnterior = "";
    operacionActual = null;
}

function calcular() {
    if (operacionActual === null || valorAnterior === "") return;

    let p1 = parseFloat(valorAnterior);
    let p2 = parseFloat(resultado.value);
    let final = 0;

    switch (operacionActual) {
        case "+": final = p1 + p2; break;
        case "-": final = p1 - p2; break;
        case "*": final = p1 * p2; break;
        case "/": 
            final = p2 !== 0 ? p1 / p2 : "Error"; 
            break;
    }

    resultado.value = final;
    operacionActual = null; 
}