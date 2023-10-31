let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

if (num1 > num2) {
    document.write("El " + num1 + " es el número más grande.");
} else if (num1 < num2) {
    document.write("El " + num2 + " es el número más grande.");
} else {
   document.write("Ambos números son iguales.");
}
