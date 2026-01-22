// ================= ejercicio7.ts =================
function ejercicio7(): void {
interface Empleado {
id: number;
nombre: string;
sueldoMensual: number;
}


class EmpleadoEmpresa implements Empleado {
constructor(
public id: number,
public nombre: string,
public sueldoMensual: number
) {}


sueldoAnual(): number {
return this.sueldoMensual * 12;
}
}


const e = new EmpleadoEmpresa(1, "Marta", 1500);
console.log("Sueldo anual:", e.sueldoAnual());
}