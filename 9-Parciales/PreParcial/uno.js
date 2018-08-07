
function mostrar()
{
/*Bienvenidos. 
Realizar el algoritmo que pida la base y la altura de un triángulo equilátero,
 informar la superficie y el perímetro en una sola ventana alert.
*/


var base;
var altura;
var superficie;
var perimetro;

base=prompt("ingrese base del triangulo");
altura=prompt("ingrese base del triangulo");

base=parseInt(base);
altura=parseInt(altura);
superficie=parseInt(superficie);
perimetro=parseInt(perimetro);

superficie=base*altura/2;
perimetro=base+base+base;

alert("La superficie del triangulo es: "+superficie+" y el perimetro: "+perimetro);


}
