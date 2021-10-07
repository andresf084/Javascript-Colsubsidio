//Por favor imprimir los valores de las posiciones pares
//de la siguiente forma
//'posicion <posicionArreglo> es par y su valor es <valorDelaPosicionDelArreglo>'
// y los valores de las posiciones impares
//de la siguiente forma
//'posicion <posicionArreglo> es impar y su valor es <valorDelaPosicionDelArreglo>'
var ciudades = ['Bucaramanga', 'Cali', 'Bogota', 'Valledupar', 'Barranquilla'];

for (var imprimir = 0; imprimir < ciudades.length; imprimir++) {
    if (imprimir % 2 == 0) 
        console.log(`Posición ${imprimir} es par y su valor es `) + console.log(ciudades[imprimir]);
        else console.log(`Posición ${imprimir} es impar y su valor es ${ciudades[imprimir]}`) ;
    
}