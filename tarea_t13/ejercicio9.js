"use strict";
// ================= ejercicio9.ts =================
function ejercicio9() {
    function toUpperSeguro(valor) {
        if (typeof valor === "string") {
            return valor.toUpperCase();
        }
        throw new Error("No es un texto");
    }
    try {
        console.log(toUpperSeguro("typescript"));
        console.log(toUpperSeguro(10));
    }
    catch (error) {
        console.error(error.message);
    }
}
