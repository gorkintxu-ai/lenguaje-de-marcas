/* =====================================================
   VARIABLES GLOBALES
   ===================================================== */

let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
const maxIntentos = 7;
let partidasGanadas = 0;
let partidasPerdidas = 0;
let partidaTerminada = false;

/* Elementos del DOM */
const inputNumero = document.getElementById("numeroUsuario");
const botonComprobar = document.getElementById("botonComprobar");
const botonNuevaPartida = document.getElementById("botonNuevaPartida");
const mensaje = document.getElementById("mensaje");
const contadorIntentos = document.getElementById("intentos");
const marcadorGanadas = document.getElementById("partidasGanadas");
const marcadorPerdidas = document.getElementById("partidasPerdidas");

/* =====================================================
   FUNCIONES AUXILIARES
   ===================================================== */

// Devuelve un número entero aleatorio entre 1 y 100 (ambos incluidos)
function generarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1;
}

// Cambia el texto y el color del mensaje
function mostrarMensaje(texto, clase) {
  mensaje.textContent = texto;
  mensaje.classList.remove("acierto", "fallo", "pista");
  if (clase) mensaje.classList.add(clase);
}

// Actualiza el contador de intentos en pantalla
function actualizarIntentos() {
  contadorIntentos.textContent = intentos;
}

// Actualiza el marcador de partidas en pantalla
function actualizarMarcador() {
  marcadorGanadas.textContent = partidasGanadas;
  marcadorPerdidas.textContent = partidasPerdidas;
}

// Bloquea el juego al terminar la partida
function finalizarPartida() {
  partidaTerminada = true;
  botonComprobar.disabled = true;
  inputNumero.disabled = true;
}

/* =====================================================
   FUNCIÓN comprobarNumero()
   ===================================================== */

function comprobarNumero() {
  if (partidaTerminada) return;

  // 1. Recoger el número introducido por el usuario
  const numeroUsuario = Number(inputNumero.value);

  // 2. Comprobar que el valor es válido y está entre 1 y 100
  if (inputNumero.value === "" || isNaN(numeroUsuario)) {
    mostrarMensaje("Introduce un número válido.", "pista");
    return;
  }
  if (numeroUsuario < 1 || numeroUsuario > 100) {
    mostrarMensaje("El número debe estar entre 1 y 100.", "pista");
    return;
  }

  // 3. Incrementar el contador de intentos
  intentos++;
  actualizarIntentos();

  // 4. Comparar el número introducido con el número secreto
  if (numeroUsuario === numeroSecreto) {
    // Acierto
    partidasGanadas++;
    actualizarMarcador();
    mostrarMensaje(
      "¡Enhorabuena! Has acertado el número en " + intentos +
      (intentos === 1 ? " intento." : " intentos."),
      "acierto"
    );
    finalizarPartida();
    return;
  }

  if (numeroUsuario < numeroSecreto) {
    mostrarMensaje("El número secreto es MAYOR.", "pista");
  } else {
    mostrarMensaje("El número secreto es MENOR.", "pista");
  }

  // 5. Si se alcanzan los 7 intentos sin acertar, se pierde la partida
  if (intentos >= maxIntentos) {
    partidasPerdidas++;
    actualizarMarcador();
    mostrarMensaje(
      "Se han agotado los intentos. El número secreto era " + numeroSecreto + ".",
      "fallo"
    );
    finalizarPartida();
    return;
  }

  // Limpiar el campo para facilitar el siguiente intento
  inputNumero.value = "";
  inputNumero.focus();
}

/* =====================================================
   FUNCIÓN nuevaPartida()
   ===================================================== */

function nuevaPartida() {
  // Generar un nuevo número aleatorio
  numeroSecreto = generarNumeroSecreto();

  // Reiniciar el contador de intentos
  intentos = 0;
  actualizarIntentos();

  // Limpiar el campo de entrada
  inputNumero.value = "";

  // Restablecer los mensajes
  mostrarMensaje("Escribe un número y pulsa Comprobar");

  // Permitir volver a jugar
  partidaTerminada = false;
  botonComprobar.disabled = false;
  inputNumero.disabled = false;
  inputNumero.focus();
}

/* =====================================================
   EVENTOS
   ===================================================== */

botonComprobar.addEventListener("click", comprobarNumero);
botonNuevaPartida.addEventListener("click", nuevaPartida);

// Permitir comprobar pulsando Intro
inputNumero.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") comprobarNumero();
});

// Inicializar la interfaz
actualizarIntentos();
actualizarMarcador();
