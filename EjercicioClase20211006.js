//Por favor imprimir los valores de las posiciones pares
//de la siguiente forma
//'posicion <posicionArreglo> es par y su valor es <valorDelaPosicionDelArreglo>'
// y los valores de las posiciones impares
//de la siguiente forma
//'posicion <posicionArreglo> es impar y su valor es <valorDelaPosicionDelArreglo>'

/*var ciudades = ['Bucaramanga', 'Cali', 'Bogota', 'Valledupar', 'Barranquilla'];

for (var imprimir = 0; imprimir < ciudades.length; imprimir++) {
    if (imprimir % 2 == 0) 
        console.log(`Posición ${imprimir} es par y su valor es `) + console.log(ciudades[imprimir]);
        else console.log(`Posición ${imprimir} es impar y su valor es ${ciudades[imprimir]}`) ;
    
}*/


/*var sumaDiagonal11 = dosDimensiones3x3[0][0] + dosDimensiones3x3[1][1] + dosDimensiones3x3[2][2]
var sumaDiagonal21 = dosDimensiones3x3[0][2] + dosDimensiones3x3[1][1] + dosDimensiones3x3[2][0]
console.log(sumaDiagonal1);
console.log(sumaDiagonal2);
console.log(sumaDiagonal1 + sumaDiagonal2);*/

var A = [[0,1,2,3], [3,4,5,6], [6,7,8,9], [3,4,5,6]];
var sumaDiagonalIzq = 0;
var sumaDiagonalDer = 0;
var Large = A.length - 1
for (var i = 0; i < A.length; i++){
    sumaDiagonalIzq = sumaDiagonalIzq + A[i][i];
    sumaDiagonalDer = sumaDiagonalDer + A[i][Large - i]
    }

console.log(sumaDiagonalIzq)
console.log(sumaDiagonalDer)

    




