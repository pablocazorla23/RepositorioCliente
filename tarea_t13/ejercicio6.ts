// ================= ejercicio6.ts =================
function ejercicio6(): void {
class Persona {
public nombre: string;
private edad: number;


constructor(nombre: string, edad: number) {
this.nombre = nombre;
this.edad = edad;
}


presentarse(): void {
console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
}
}


const p = new Persona("Luis", 30);
p.presentarse();
// console.log(p.edad); // Error TS
}