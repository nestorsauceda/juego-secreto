let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(intentos); //para ver la cantidad de intentos que llevamos

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `¡Genial! a certaste el numero en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento(
        "p",
        `El número secreto es menor que ${numeroDeUsuario}`
      );
    } else {
      asignarTextoElemento(
        "p",
        `El número secreto es mayor que ${numeroDeUsuario}`
      );
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  let valorCaja = (document.querySelector("#valorUsuario").value = "");
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log("numero generado", numeroGenerado);
  console.log(listaNumerosSorteados);
  //prguntar si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los numeros");
  } else {
    //si el numero generado esta en la lista hacemos algo si no hacemos algo diferente
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  //generar el número aleatorio nuevamente
  numeroSecreto = generarNumeroSecreto();
  console.log(numeroSecreto); //para poder ver el numero secreto
  //inicializar el número de intentos
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar la caja
  limpiarCaja();
  //indicar mesaje de inicio
  condicionesIniciales();
  //deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
