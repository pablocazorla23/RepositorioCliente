// -------------------------------
// Expresiones regulares obligatorias
// -------------------------------
const regex = {
    nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
    edad: /^\d+$/
};

// Mensajes de ayuda
const ayudas = {
    nombre: "Introduce solo letras y espacios.",
    email: "Debe ser un correo electrónico válido.",
    password: "Mín. 8 caracteres, 1 mayúscula, 1 número y 1 símbolo.",
    edad: "Introduce solo números."
};

// -------------------------------
// Función para gestionar cookies
// -------------------------------
function crearCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = `${nombre}=${valor};expires=${fecha.toUTCString()};path=/`;
}

function leerCookie(nombre) {
    let cookies = document.cookie.split("; ");
    for (let c of cookies) {
        let [key, value] = c.split("=");
        if (key === nombre) return value;
    }
    return null;
}

function borrarCookie(nombre) {
    document.cookie = `${nombre}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

// -------------------------------
// window.onload  comprobar cookie
// -------------------------------
window.onload = function() {
    let username = leerCookie("username");
    if (username) {
        document.getElementById("saludo").textContent =
            `Bienvenido de nuevo, ${username}`;
        document.getElementById("nombre").value = username;
    }
};

// -------------------------------
// onfocus  mostrar ayuda
// -------------------------------
function mostrarAyuda(campo) {
    document.getElementById(`ayuda-${campo}`).textContent = ayudas[campo];
}

// onblur → ocultar ayuda
function ocultarAyuda(campo) {
    document.getElementById(`ayuda-${campo}`).textContent = "";
}

// -------------------------------
// oninput  validación en vivo
// -------------------------------
function validarCampo(campo) {
    let input = document.getElementById(campo);
    let valor = input.value;
    let estado = document.getElementById(`estado-${campo}`);

    if (regex[campo].test(valor)) {
        input.style.border = "2px solid green";
        estado.textContent = "Correcto";
        estado.className = "mensaje correcto";
        return true;
    } else {
        input.style.border = "2px solid red";
        estado.textContent = "Formato incorrecto";
        estado.className = "mensaje incorrecto";
        return false;
    }
}

// -------------------------------
// submit  validación final
// -------------------------------
document.getElementById("formulario").addEventListener("submit", function(e) {
    let valido =
        validarCampo("nombre") &
        validarCampo("email") &
        validarCampo("password") &
        validarCampo("edad");

    if (!valido) {
        e.preventDefault();
        alert("Debe corregir los errores antes de enviar.");
        return;
    }

    let username = document.getElementById("nombre").value;
    crearCookie("username", username, 7);

    alert("Formulario enviado correctamente");
});

// -------------------------------
// Botón eliminar cookie
// -------------------------------
document.getElementById("btnEliminarCookie").onclick = function() {
    borrarCookie("username");
    alert("Cookie eliminada correctamente.");
};