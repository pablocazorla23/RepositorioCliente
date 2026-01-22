"use strict";
// ================= ejercicio8.ts =================
function ejercicio8() {
    function doblarPositivo(n) {
        if (n < 0) {
            throw new Error("Número negativo");
        }
        return n * 2;
    }
    try {
        console.log(doblarPositivo(5));
        console.log(doblarPositivo(-2));
    }
    catch (error) {
        console.error(error.message);
    }
}
