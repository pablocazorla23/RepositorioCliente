// TODO: Ejercicio 1 - Crear Objeto Estudiante

// Creamos el objeto estudiante
var estudiante = {
    nombre: "Pablo",
    apellidos: "Cazorla Dagnall",
    edad: 23,
    curso: "DAW 2",
    mostrarInfo: function() {
        var html = "<h3>Información del Estudiante</h3>";
        html += "<p><strong>Nombre:</strong> " + this.nombre + "</p>";
        html += "<p><strong>Apellidos:</strong> " + this.apellidos + "</p>";
        html += "<p><strong>Edad:</strong> " + this.edad + "</p>";
        html += "<p><strong>Curso:</strong> " + this.curso + "</p>";
        return html;
    }
};

// Referencias al botón y al contenedor del DOM
var botonEj1 = document.getElementById("btn-ej1");
var resultadoEj1 = document.getElementById("resultado-ej1");

// Evento para mostrar la información al hacer clic
botonEj1.addEventListener("click", function() {
    resultadoEj1.innerHTML = estudiante.mostrarInfo();
});
var colores = ["Rojo", "Verde", "Azul"];

var inputColor = document.getElementById("color-input");
var btnAgregar = document.getElementById("btn-agregar-color");
var btnEliminar = document.getElementById("btn-eliminar-ultimo");
var btnMostrar = document.getElementById("btn-mostrar-colores");
var resultadoEj2 = document.getElementById("resultado-ej2");

// Función para mostrar los colores
function mostrarColores() {
    if (colores.length === 0) {
        resultadoEj2.innerHTML = "<p>No hay colores en el array.</p>";
        return;
    }

    // Crear lista ordenada HTML
    var html = "<ol>";
    for (var i = 0; i < colores.length; i++) {
        html += "<li>" + colores[i] + "</li>";
    }
    html += "</ol>";

    resultadoEj2.innerHTML = html;
}

// Botón Agregar
btnAgregar.addEventListener("click", function() {
    var nuevoColor = inputColor.value.trim();
    if (nuevoColor === "") {
        alert("Debes escribir un color");
        return;
    }
    colores.push(nuevoColor);
    inputColor.value = "";
    mostrarColores();
});

// Botón Eliminar
btnEliminar.addEventListener("click", function() {
    if (colores.length === 0) {
        alert("No hay colores para eliminar");
        return;
    }
    colores.pop();
    mostrarColores();
});

// Botón Mostrar
btnMostrar.addEventListener("click", function() {
    mostrarColores();
});
// TODO: Ejercicio 3 - Catálogo de Productos

// Array vacío que se llenará con los productos
var productos = [];

// Referencias al DOM
var btnCargar = document.getElementById("btn-cargar-productos");
var btnOrdenar = document.getElementById("btn-ordenar-precio");
var btnFiltrar = document.getElementById("btn-filtrar-caros");
var resultadoEj3 = document.getElementById("resultado-ej3");

// Función para mostrar productos en HTML
function mostrarProductos(lista) {
    if (lista.length === 0) {
        resultadoEj3.innerHTML = "<p>No hay productos para mostrar.</p>";
        return;
    }
    var html = "<ul>";
    for (var i = 0; i < lista.length; i++) {
        html += "<li><strong>" + lista[i].nombre + "</strong> - " +
                lista[i].categoria + " - " +
                lista[i].precio + "€</li>";
    }
    html += "</ul>";
    resultadoEj3.innerHTML = html;
}

// Botón Cargar Productos
btnCargar.addEventListener("click", function() {
    productos = [
        { nombre: "Camiseta", precio: 25, categoria: "Ropa" },
        { nombre: "Auriculares", precio: 75, categoria: "Electrónica" },
        { nombre: "Zapatos", precio: 60, categoria: "Calzado" },
        { nombre: "Libro", precio: 15, categoria: "Educación" },
        { nombre: "Smartwatch", precio: 120, categoria: "Electrónica" }
    ];
    mostrarProductos(productos);
});

// Botón Ordenar por Precio
btnOrdenar.addEventListener("click", function() {
    if (productos.length === 0) {
        alert("Primero debes cargar los productos");
        return;
    }
    // Ordenamos por precio de menor a mayor
    productos.sort(function(a, b) {
        return a.precio - b.precio;
    });
    mostrarProductos(productos);
});

// Botón Filtrar productos caros (>50€)
btnFiltrar.addEventListener("click", function() {
    if (productos.length === 0) {
        alert("Primero debes cargar los productos");
        return;
    }
    var caros = productos.filter(function(producto) {
        return producto.precio > 50;
    });
    mostrarProductos(caros);
});
// TODO: Ejercicio 4 - Estudiante con Notas

// Creamos el objeto estudiante con array de notas
var estudianteNotas = {
    nombre: "Pablo",
    apellidos: "Cazorla Dagnall",
    edad: 23,
    curso: "DAW",
    notas: [],

    // Método para agregar nota (0-10)
    agregarNota: function(nota) {
        if (nota < 0 || nota > 10 || isNaN(nota)) {
            alert("La nota debe estar entre 0 y 10");
            return;
        }
        this.notas.push(nota);
    },

    // Método para calcular promedio
    calcularPromedio: function() {
        if (this.notas.length === 0) return 0;
        var suma = 0;
        for (var i = 0; i < this.notas.length; i++) {
            suma += this.notas[i];
        }
        return (suma / this.notas.length).toFixed(2);
    },

    // Método para mostrar todas las notas y promedio en HTML
    mostrarNotas: function() {
        if (this.notas.length === 0) {
            return "<p>No hay notas registradas.</p>";
        }
        var html = "<h4>Notas de " + this.nombre + " " + this.apellidos + "</h4>";
        html += "<ul>";
        for (var i = 0; i < this.notas.length; i++) {
            html += "<li>Nota " + (i + 1) + ": " + this.notas[i] + "</li>";
        }
        html += "</ul>";
        html += "<p><strong>Promedio:</strong> " + this.calcularPromedio() + "</p>";
        return html;
    }
};

// Referencias al DOM
var inputNota = document.getElementById("nota-input");
var btnAgregarNota = document.getElementById("btn-agregar-nota");
var btnCalcularPromedio = document.getElementById("btn-calcular-promedio");
var btnMostrarNotas = document.getElementById("btn-mostrar-notas");
var resultadoEj4 = document.getElementById("resultado-ej4");

// Evento para agregar nota
btnAgregarNota.addEventListener("click", function() {
    var valor = parseFloat(inputNota.value);
    estudianteNotas.agregarNota(valor);
    inputNota.value = "";
    resultadoEj4.innerHTML = estudianteNotas.mostrarNotas();
});

// Evento para calcular promedio
btnCalcularPromedio.addEventListener("click", function() {
    resultadoEj4.innerHTML = "<p><strong>Promedio:</strong> " + estudianteNotas.calcularPromedio() + "</p>";
});

// Evento para mostrar notas
btnMostrarNotas.addEventListener("click", function() {
    resultadoEj4.innerHTML = estudianteNotas.mostrarNotas();
});
// TODO: Ejercicio 5 - Gestión de Empleados

// Array vacío de empleados
var empleados = [];

// Referencias al DOM
var inputDepto = document.getElementById("departamento-input");
var btnCargarEmpleados = document.getElementById("btn-cargar-empleados");
var btnBuscarDepto = document.getElementById("btn-buscar-depto");
var btnSalarioAlto = document.getElementById("btn-salario-alto");
var resultadoEj5 = document.getElementById("resultado-ej5");

// Función para mostrar empleados en HTML
function mostrarEmpleados(lista) {
    if (lista.length === 0) {
        resultadoEj5.innerHTML = "<p>No hay empleados que mostrar.</p>";
        return;
    }
    var html = "<ul>";
    for (var i = 0; i < lista.length; i++) {
        html += "<li><strong>" + lista[i].nombre + "</strong> - " +
                lista[i].departamento + " - " +
                lista[i].salario + "€ - " +
                lista[i].antiguedad + " años</li>";
    }
    html += "</ul>";
    resultadoEj5.innerHTML = html;
}

// Botón Cargar Empleados
btnCargarEmpleados.addEventListener("click", function() {
    empleados = [
        { nombre: "Laura", departamento: "Ventas", salario: 2800, antiguedad: 3 },
        { nombre: "Carlos", departamento: "Marketing", salario: 3200, antiguedad: 5 },
        { nombre: "Marta", departamento: "Recursos Humanos", salario: 2900, antiguedad: 2 },
        { nombre: "Pedro", departamento: "IT", salario: 4000, antiguedad: 6 },
        { nombre: "Ana", departamento: "Marketing", salario: 3500, antiguedad: 4 }
    ];
    mostrarEmpleados(empleados);
});

// Botón Buscar por Departamento
btnBuscarDepto.addEventListener("click", function() {
    var depto = inputDepto.value.trim();
    if (depto === "") {
        alert("Debes escribir un departamento");
        return;
    }
    var filtrados = empleados.filter(function(emp) {
        return emp.departamento.toLowerCase() === depto.toLowerCase();
    });
    mostrarEmpleados(filtrados);
});

// Botón Filtrar salario > 3000€
btnSalarioAlto.addEventListener("click", function() {
    var filtrados = empleados.filter(function(emp) {
        return emp.salario > 3000;
    });
    mostrarEmpleados(filtrados);
});
// TODO: Ejercicio 6 - Métodos Avanzados de Arrays

var ciudades = [];

// Referencias al DOM
var btnCrearCiudades = document.getElementById("btn-crear-ciudades");
var btnEliminarMedio = document.getElementById("btn-eliminar-medio");
var btnExtraerSlice = document.getElementById("btn-extraer-slice");
var btnBuscarCiudad = document.getElementById("btn-buscar-ciudad");
var resultadoEj6 = document.getElementById("resultado-ej6");

// Crear array de ciudades
btnCrearCiudades.addEventListener("click", function() {
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao"];
    resultadoEj6.innerHTML = "<p>Array de ciudades creado: " + ciudades.join(", ") + "</p>";
});

// Eliminar del medio con splice
btnEliminarMedio.addEventListener("click", function() {
    if (ciudades.length < 3) {
        alert("No hay suficientes elementos para eliminar del medio");
        return;
    }
    var medio = Math.floor(ciudades.length / 2);
    ciudades.splice(medio, 1);
    resultadoEj6.innerHTML = "<p>Después de eliminar del medio: " + ciudades.join(", ") + "</p>";
});

// Extraer con slice
btnExtraerSlice.addEventListener("click", function() {
    if (ciudades.length === 0) {
        alert("Primero debes crear el array");
        return;
    }
    var extraidas = ciudades.slice(1, 4); // ejemplo: del índice 1 al 3
    resultadoEj6.innerHTML = "<p>Porción extraída con slice (índices 1-3): " + extraidas.join(", ") + "</p>";
});

// Buscar "Madrid" con find() o indexOf()
btnBuscarCiudad.addEventListener("click", function() {
    if (ciudades.length === 0) {
        alert("Primero debes crear el array");
        return;
    }
    var encontrado = ciudades.find(function(ciudad) {
        return ciudad.toLowerCase() === "madrid";
    });
    if (encontrado) {
        resultadoEj6.innerHTML = "<p>Se encontró la ciudad: " + encontrado + "</p>";
    } else {
        resultadoEj6.innerHTML = "<p>Madrid no se encuentra en el array</p>";
    }
});
// TODO: Ejercicio 7 - Constructor de Vehículos

// Función constructora Vehiculo
function Vehiculo(marca, modelo, anio, velocidad) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.velocidad = velocidad || 0;

    this.acelerar = function(incremento) {
        this.velocidad += incremento;
    };

    this.mostrarInfo = function() {
        return this.marca + " " + this.modelo + " (" + this.anio + ") - Velocidad: " + this.velocidad + " km/h";
    };
}

var vehiculos = [];

// Referencias al DOM
var btnCrearVehiculos = document.getElementById("btn-crear-vehiculos");
var btnAcelerarTodos = document.getElementById("btn-acelerar-todos");
var btnInfoVehiculos = document.getElementById("btn-info-vehiculos");
var resultadoEj7 = document.getElementById("resultado-ej7");

// Crear vehículos de ejemplo
btnCrearVehiculos.addEventListener("click", function() {
    vehiculos = [
        new Vehiculo("Toyota", "Corolla", 2020),
        new Vehiculo("Honda", "Civic", 2019),
        new Vehiculo("Ford", "Focus", 2021)
    ];
    resultadoEj7.innerHTML = "<p>Vehículos creados correctamente.</p>";
});

// Acelerar todos los vehículos
btnAcelerarTodos.addEventListener("click", function() {
    if (vehiculos.length === 0) {
        alert("Primero debes crear los vehículos");
        return;
    }
    for (var i = 0; i < vehiculos.length; i++) {
        vehiculos[i].acelerar(20); // Incremento de 20 km/h
    }
    resultadoEj7.innerHTML = "<p>Todos los vehículos aceleraron 20 km/h.</p>";
});

// Mostrar información de todos los vehículos
btnInfoVehiculos.addEventListener("click", function() {
    if (vehiculos.length === 0) {
        resultadoEj7.innerHTML = "<p>No hay vehículos para mostrar.</p>";
        return;
    }
    var html = "<ul>";
    for (var i = 0; i < vehiculos.length; i++) {
        html += "<li>" + vehiculos[i].mostrarInfo() + "</li>";
    }
    html += "</ul>";
    resultadoEj7.innerHTML = html;
});
// TODO: Ejercicio 8 - Matriz de Números

var matriz = [];

// Referencias al DOM
var btnCrearMatriz = document.getElementById("btn-crear-matriz");
var btnSumarDiagonal = document.getElementById("btn-sumar-diagonal");
var btnMostrarMatriz = document.getElementById("btn-mostrar-matriz");
var resultadoEj8 = document.getElementById("resultado-ej8");

// Función para generar número aleatorio entre min y max
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Crear matriz 3x3
btnCrearMatriz.addEventListener("click", function() {
    matriz = [];
    for (var i = 0; i < 3; i++) {
        var fila = [];
        for (var j = 0; j < 3; j++) {
            fila.push(numeroAleatorio(1, 100));
        }
        matriz.push(fila);
    }
    resultadoEj8.innerHTML = "<p>Matriz 3x3 creada correctamente.</p>";
});

// Calcular suma diagonal principal
btnSumarDiagonal.addEventListener("click", function() {
    if (matriz.length === 0) {
        alert("Primero debes crear la matriz");
        return;
    }
    var suma = 0;
    for (var i = 0; i < 3; i++) {
        suma += matriz[i][i];
    }
    resultadoEj8.innerHTML = "<p>Suma de la diagonal principal: <strong>" + suma + "</strong></p>";
});

// Mostrar matriz en tabla HTML
btnMostrarMatriz.addEventListener("click", function() {
    if (matriz.length === 0) {
        alert("Primero debes crear la matriz");
        return;
    }
    var html = "<table class='table table-bordered table-striped text-center'>";
    for (var i = 0; i < 3; i++) {
        html += "<tr>";
        for (var j = 0; j < 3; j++) {
            html += "<td>" + matriz[i][j] + "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    resultadoEj8.innerHTML = html;
});
// TODO: Ejercicio 9 - Métodos Funcionales

var numeros = [];

// Referencias al DOM
var btnCrearNumeros = document.getElementById("btn-crear-numeros");
var btnDuplicarMap = document.getElementById("btn-duplicar-map");
var btnFiltrarPares = document.getElementById("btn-filtrar-pares");
var btnSumarReduce = document.getElementById("btn-sumar-reduce");
var resultadoEj9 = document.getElementById("resultado-ej9");

// Crear array de números del 1 al 10
btnCrearNumeros.addEventListener("click", function() {
    numeros = [];
    for (var i = 1; i <= 10; i++) {
        numeros.push(i);
    }
    resultadoEj9.innerHTML = "<p>Array creado: " + numeros.join(", ") + "</p>";
});

// Duplicar todos los números con map()
btnDuplicarMap.addEventListener("click", function() {
    if (numeros.length === 0) {
        alert("Primero debes crear el array");
        return;
    }
    var duplicados = numeros.map(function(num) {
        return num * 2;
    });
    resultadoEj9.innerHTML = "<p>Números duplicados: " + duplicados.join(", ") + "</p>";
});

// Filtrar solo números pares
btnFiltrarPares.addEventListener("click", function() {
    if (numeros.length === 0) {
        alert("Primero debes crear el array");
        return;
    }
    var pares = numeros.filter(function(num) {
        return num % 2 === 0;
    });
    resultadoEj9.innerHTML = "<p>Números pares: " + pares.join(", ") + "</p>";
});

// Sumar todos los números con reduce()
btnSumarReduce.addEventListener("click", function() {
    if (numeros.length === 0) {
        alert("Primero debes crear el array");
        return;
    }
    var suma = numeros.reduce(function(acum, num) {
        return acum + num;
    }, 0);
    resultadoEj9.innerHTML = "<p>Suma de todos los números: " + suma + "</p>";
});
// TODO: Ejercicio 10 - Biblioteca de Libros

var biblioteca = [];

// Referencias al DOM
var inputTitulo = document.getElementById("libro-titulo");
var inputAutor = document.getElementById("libro-autor");
var inputYear = document.getElementById("libro-year");
var selectGenero = document.getElementById("libro-genero");

var btnAgregarLibro = document.getElementById("btn-agregar-libro");
var btnMostrarBiblioteca = document.getElementById("btn-mostrar-biblioteca");
var btnOrdenarTitulo = document.getElementById("btn-ordenar-titulo");
var btnFiltrarGenero = document.getElementById("btn-filtrar-genero");
var btnLibrosRecientes = document.getElementById("btn-libros-recientes");

var resultadoEj10 = document.getElementById("resultado-ej10");

// Función para mostrar la biblioteca
function mostrarBiblioteca(lista) {
    if (lista.length === 0) {
        resultadoEj10.innerHTML = "<p>No hay libros en la biblioteca.</p>";
        return;
    }
    var html = "<table class='table table-bordered'>";
    html += "<thead><tr><th>Título</th><th>Autor</th><th>Año</th><th>Género</th></tr></thead><tbody>";
    for (var i = 0; i < lista.length; i++) {
        html += "<tr>";
        html += "<td>" + lista[i].titulo + "</td>";
        html += "<td>" + lista[i].autor + "</td>";
        html += "<td>" + lista[i].anio + "</td>";
        html += "<td>" + lista[i].genero + "</td>";
        html += "</tr>";
    }
    html += "</tbody></table>";
    resultadoEj10.innerHTML = html;
}

// Función para validar datos
function validarLibro(titulo, autor, anio, genero) {
    if (titulo.trim() === "" || autor.trim() === "" || anio === "" || genero === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }
    if (isNaN(anio) || anio <= 0) {
        alert("El año debe ser un número válido");
        return false;
    }
    return true;
}

// Agregar libro
btnAgregarLibro.addEventListener("click", function() {
    var titulo = inputTitulo.value.trim();
    var autor = inputAutor.value.trim();
    var anio = parseInt(inputYear.value);
    var genero = selectGenero.value;

    if (!validarLibro(titulo, autor, anio, genero)) return;

    biblioteca.push({
        titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero
    });

    inputTitulo.value = "";
    inputAutor.value = "";
    inputYear.value = "";
    selectGenero.value = "";

    mostrarBiblioteca(biblioteca);
});

// Mostrar toda la biblioteca
btnMostrarBiblioteca.addEventListener("click", function() {
    mostrarBiblioteca(biblioteca);
});

// Ordenar por título
btnOrdenarTitulo.addEventListener("click", function() {
    var ordenados = [...biblioteca].sort(function(a, b) {
        return a.titulo.localeCompare(b.titulo);
    });
    mostrarBiblioteca(ordenados);
});

// Filtrar por género seleccionado
btnFiltrarGenero.addEventListener("click", function() {
    var genero = selectGenero.value;
    if (genero === "") {
        alert("Selecciona un género para filtrar");
        return;
    }
    var filtrados = biblioteca.filter(function(libro) {
        return libro.genero === genero;
    });
    mostrarBiblioteca(filtrados);
});

// Mostrar libros recientes (>2020)
btnLibrosRecientes.addEventListener("click", function() {
    var recientes = biblioteca.filter(function(libro) {
        return libro.anio > 2020;
    });
    mostrarBiblioteca(recientes);
});