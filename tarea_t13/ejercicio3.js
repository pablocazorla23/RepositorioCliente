"use strict";
// ================= ejercicio3.ts =================
function ejercicio3() {
    function saludar(nombre) {
        if (nombre) {
            console.log(`Hola, ${nombre}`);
        }
        else {
            console.log("Hola, invitado");
        }
    }
    saludar("Ana");
    saludar();
}
