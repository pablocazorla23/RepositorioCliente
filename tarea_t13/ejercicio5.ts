// ================= ejercicio5.ts =================
function ejercicio5(): void {
interface Producto {
id: number;
nombre: string;
precio: number;
}


const productos: Producto[] = [
{ id: 1, nombre: "Teclado", precio: 25 },
{ id: 2, nombre: "Ratón", precio: 15 },
{ id: 3, nombre: "Monitor", precio: 180 }
];


let total: number = 0;


productos.forEach(p => {
console.log(`${p.nombre} - ${p.precio}€`);
total += p.precio;
});


console.log("Total:", total);
}