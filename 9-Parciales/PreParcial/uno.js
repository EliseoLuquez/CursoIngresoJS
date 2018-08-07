
function mostrar()
{
	/*Bienvenidos. 
	Realizar el algoritmo que pida la base y la altura de un triángulo equilátero,
	 informar la superficie y el perimetro en una sola ventana alert.
	*/

	var base;
	var altura;	
	var superficie;
	var perimetro;

	base=prompt("Ingrese la base del triangulo");
	altura=prompt("Ingrese la altura del triangulo");
	base=parseInt(base);
	altura=parseInt(altura);
	superficie=parseInt(superficie);
	perimetro=parseInt(perimetro);

	superficie=(base*altura)/2;
	perimetro=base*3;

	alert("La superficie del triangulo es "+superficie+" y el perimetro "+perimetro);

































}
