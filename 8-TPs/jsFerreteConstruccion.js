/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambreFinal;

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;
	largo = parseInt(largo);
	ancho = parseInt(ancho);
	alambreFinal = parseInt(alambreFinal);
	alambreFinal = (largo*2+ancho*2)*3;
	alert(alambreFinal);
}
function Circulo () 
{
	var radio;
	var alambreFinal;
	radio = document.getElementById('Radio').value;
	radio = parseInt(radio);
	alambreFinal = parseInt(alambreFinal);
	alambreFinal = (2*Math.PI*radio)*3;
	alert(alambreFinal);
}
function Materiales () 
{
	var largo;
	var ancho;
	var cal;
	var cemento;
	var superficie;

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;
	largo = parseInt(largo);
	ancho = parseInt(ancho);
	cal = parseInt(cal);
	cemento = parseInt(cemento);
	superficie = parseInt(superficie);
	superficie = largo*ancho;
	cal = largo*ancho*3;
	cemento = largo*ancho*2;
	
	alert("Para el terreno rectangular de "+superficie+" m2 se necesitan "+cal+" bolsas de cal y "+cemento+" bolsas de cemento");

}