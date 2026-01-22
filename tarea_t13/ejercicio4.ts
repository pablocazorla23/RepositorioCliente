// ================= ejercicio4.ts =================
function ejercicio4(): void {
interface Producto {
id: number;
nombre: string;
precio: number;
}


const producto: Producto = { id: 1, nombre: "Teclado", precio: 25 };
console.log(producto);


// const productoError: Producto = { id: 2, nombre: "Ratón" }; // Error TS
}