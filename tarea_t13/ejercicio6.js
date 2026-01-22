"use strict";
// ================= ejercicio6.ts =================
function ejercicio6() {
    class Persona {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
        presentarse() {
            console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
        }
    }
    const p = new Persona("Pablo", 23);
    p.presentarse();
    // console.log(p.edad); // Error TS
}
