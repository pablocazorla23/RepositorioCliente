"use strict";
// ================= ejercicio10.ts =================
function ejercicio10() {
    class AlumnoApp {
        constructor(id, nombre, notas) {
            this.id = id;
            this.nombre = nombre;
            this.notas = notas;
        }
        media() {
            return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
        }
        resumen() {
            return `${this.nombre} - Media: ${this.media().toFixed(2)}`;
        }
    }
    const alumnos = [
        new AlumnoApp(1, "Ana", [8, 7, 9]),
        new AlumnoApp(2, "Carlos", [6, 5, 7]),
        new AlumnoApp(3, "Lucía", [9, 9, 8])
    ];
    let mediaGlobal = 0;
    alumnos.forEach(a => {
        console.log(a.resumen());
        mediaGlobal += a.media();
    });
    console.log("Media global:", mediaGlobal / alumnos.length);
}
