"use strict";
// ================= ejercicio7.ts =================
function ejercicio7() {
    class EmpleadoEmpresa {
        constructor(id, nombre, sueldoMensual) {
            this.id = id;
            this.nombre = nombre;
            this.sueldoMensual = sueldoMensual;
        }
        sueldoAnual() {
            return this.sueldoMensual * 12;
        }
    }
    const e = new EmpleadoEmpresa(1, "Marta", 1500);
    console.log("Sueldo anual:", e.sueldoAnual());
}
