// ================= ejercicio10.ts =================
function ejercicio10(): void {
interface Alumno {
id: number;
nombre: string;
notas: number[];
}


class AlumnoApp implements Alumno {
constructor(
public id: number,
public nombre: string,
public notas: number[]
) {}


media(): number {
return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
}


resumen(): string {
return `${this.nombre} - Media: ${this.media().toFixed(2)}`;
}
}


const alumnos: AlumnoApp[] = [
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