
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base = prompt("Ingrese la base del triangulo equilatero: ");
	altura = prompt("Ingrese la altura del triangulo equilatero: ");

	base = parseInt(base);
	altura = parseInt(altura);

	superficie = base*altura/2;
	perimetro = base*3;

	alert("La superficie del triangulo equilatero es "+superficie+ " y el perimetro es "+perimetro);





}
