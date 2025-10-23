// =======================
// EJERCICIO 1
// =======================
document.getElementById("btnEj1").addEventListener("click", () => {
  const parrafos = document.getElementsByTagName("p");

  // 1. Cambiar texto del primer párrafo
  parrafos[0].textContent = "Texto modificado por JavaScript";

  // 2. Aplicar clase resaltado al segundo
  parrafos[1].classList.add("resaltado");

  // 3. Cambiar color del tercero
  parrafos[2].style.color = "red";
});

// =======================
// EJERCICIO 2
// =======================
const contenedor = document.getElementById("contenido");
const btnAdd = document.getElementById("addParrafo");
const btnDel = document.getElementById("delParrafo");

btnAdd.addEventListener("click", () => {
  const nuevo = document.createElement("p");
  nuevo.textContent = "Nuevo párrafo añadido";
  contenedor.appendChild(nuevo);
});

btnDel.addEventListener("click", () => {
  if (contenedor.lastElementChild) {
    contenedor.removeChild(contenedor.lastElementChild);
  }
});

// =======================
// EJERCICIO 3
// =======================
const parrafosEj3 = document.querySelectorAll("#ej3 p");

parrafosEj3.forEach(p => {
  p.addEventListener("mouseenter", () => {
    p.style.backgroundColor = "lightgray";
  });
  p.addEventListener("mouseleave", () => {
    p.style.backgroundColor = "";
  });
});

// =======================
// EJERCICIO 4
// =======================
const btnCambiar = document.getElementById("btnCambiar");
const inputTexto = document.getElementById("nuevoTexto");
const mensajeError = document.getElementById("mensajeError");

btnCambiar.addEventListener("click", () => {
  const valor = inputTexto.value.trim();
  const primerParrafo = document.querySelector("p");

  if (valor === "") {
    mensajeError.style.display = "block";
  } else {
    primerParrafo.textContent = valor;
    mensajeError.style.display = "none";
    inputTexto.value = "";
  }
});

// =======================
// EJERCICIO 5
// =======================
const inputTarea = document.getElementById("tareaInput");
const btnAddTarea = document.getElementById("btnAddTarea");
const btnBorrarCompletadas = document.getElementById("btnBorrarCompletadas");
const listaTareas = document.getElementById("listaTareas");

btnAddTarea.addEventListener("click", () => {
  const texto = inputTarea.value.trim();
  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;
  li.className = "list-group-item";

  li.addEventListener("click", () => {
    li.classList.toggle("completada");
  });

  listaTareas.appendChild(li);
  inputTarea.value = "";
});

btnBorrarCompletadas.addEventListener("click", () => {
  const completadas = document.querySelectorAll(".completada");
  completadas.forEach(li => li.remove());
});
