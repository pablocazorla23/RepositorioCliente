// ======================================================
// Ejercicio 1 - raizCuadrada(numero)
// ======================================================
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');

  function raizCuadrada(numero) {
    if (isNaN(numero)) {
      return "Error: introduce un número válido.";
    }
    if (numero < 0) {
      return "Error: no se puede calcular la raíz de un número negativo.";
    }
    return Math.sqrt(numero);
  }

  const res = raizCuadrada(v);
  out.textContent = `Resultado: ${res}`;
});

// ======================================================
// Ejercicio 2 - alerta(mensaje)
// ======================================================
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';

  function alerta(mensaje) {
    alert(mensaje);
  }

  alerta(msg);
  document.getElementById('out-e2').textContent = 'Alert mostrado correctamente.';
});

// ======================================================
// Ejercicio 3 - new Function
// ======================================================
document.getElementById('run-e3').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('a-e3a').value);
  const b = parseFloat(document.getElementById('a-e3b').value);
  const out = document.getElementById('out-e3');

  const suma = new Function('a', 'b', 'return a + b;');
  const res = suma(a, b);

  out.textContent = `Resultado: ${res}`;
});

// ======================================================
// Ejercicio 4 - Hoisting con var
// ======================================================
document.getElementById('run-e4').addEventListener('click', function () {
  const out = document.getElementById('out-e4');

  function ejemploHoisting() {
    console.log("Valor de x antes de asignar:", x);
    var x = 10;
    console.log("Valor de x después de asignar:", x);
  }

  ejemploHoisting();
  out.textContent = "Consulta la consola: 'x' es undefined antes de su asignación debido al hoisting.";
});

// ======================================================
// Ejercicio 5 - IIFE
// ======================================================
document.getElementById('run-e5').addEventListener('click', function () {
  const out = document.getElementById('out-e5');

  const resultado = (function () {
    console.log("Ejecutando IIFE...");
    return "Hola desde la IIFE";
  })();

  out.textContent = `Resultado devuelto: ${resultado}`;
});

// ======================================================
// Ejercicio 6 - Función anónima dividir
// ======================================================
document.getElementById('run-e6').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('a-e6a').value);
  const b = parseFloat(document.getElementById('a-e6b').value);
  const out = document.getElementById('out-e6');

  const dividir = function (a, b) {
    if (isNaN(a) || isNaN(b)) return "Error: introduce números válidos.";
    if (b === 0) return "Error: división por cero.";
    return a / b;
  };

  const res = dividir(a, b);
  out.textContent = `Resultado: ${res}`;
});

// ======================================================
// Ejercicio 7 - Función flecha multiplicar
// ======================================================
document.getElementById('run-e7').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('a-e7a').value);
  const b = parseFloat(document.getElementById('a-e7b').value);
  const out = document.getElementById('out-e7');

  const multiplicar = (a, b) => a * b;
  const res = multiplicar(a, b);

  out.textContent = `Resultado: ${res}`;
});

// ======================================================
// Ejercicio 8 - Parámetros por defecto (saludar)
// ======================================================
document.getElementById('run-e8').addEventListener('click', function () {
  const nombre = document.getElementById('a-e8').value;
  const out = document.getElementById('out-e8');

  function saludar(nombre = 'Invitado') {
    return `Hola, ${nombre}`;
  }

  const res = saludar(nombre);
  out.textContent = res;
});

// ======================================================
// Ejercicio 9 - Funciones anidadas y closures
// ======================================================
document.getElementById('run-e9').addEventListener('click', function () {
  const out = document.getElementById('out-e9');

  // Función externa que crea el contador y devuelve la función interna
  function externa() {
    let contador = 0;
    function interna() {
      contador++;
      return contador;
    }
    return interna;
  }

  // Creamos una instancia del closure (contador propio)
  // Nota: si quisieras mantener el mismo contador entre clics, podrías declararlo fuera del listener.
  const contar = externa();

  // Llamamos varias veces para demostrar el closure
  const resultado1 = contar();
  const resultado2 = contar();
  const resultado3 = contar();

  out.innerHTML = `
    <strong>Resultados:</strong><br>
    Llamada 1 → ${resultado1}<br>
    Llamada 2 → ${resultado2}<br>
    Llamada 3 → ${resultado3}<br><br>
    <em>La función interna “recuerda” el valor de 'contador' gracias al closure.</em>
  `;
});

// ======================================================
// Ejercicio 10 - Métodos nativos
// ======================================================
document.getElementById('run-e10').addEventListener('click', function () {
  const texto = document.getElementById('a-e10').value;
  const out = document.getElementById('out-e10');

  const length = texto.length;
  const upper = texto.toUpperCase();
  const trimmed = texto.trim();
  const index = texto.indexOf('Mundo');
  const random = Math.random().toFixed(4);
  const timestamp = Date.now();

  out.innerHTML = `
    length: ${length}<br>
    toUpperCase: '${upper}'<br>
    trim: '${trimmed}'<br>
    indexOf('Mundo'): ${index}<br>
    Math.random(): ${random}<br>
    Date.now(): ${timestamp}
  `;
});
