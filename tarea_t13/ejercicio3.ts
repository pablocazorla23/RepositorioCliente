// ================= ejercicio3.ts =================
function ejercicio3(): void {
function saludar(nombre?: string): void {
if (nombre) {
console.log(`Hola, ${nombre}`);
} else {
console.log("Hola, invitado");
}
}


saludar("Ana");
saludar();
}