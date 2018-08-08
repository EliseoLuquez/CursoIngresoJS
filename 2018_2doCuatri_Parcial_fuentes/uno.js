
function mostrar()
{
	//alert("comentar esta linea 1");
	var ancho;
	var largo;
	var perimetro;
	var pintura;
	
	ancho=prompt("ingrese ancho");
	largo=prompt("ingrese largo");
	ancho=parseInt(ancho);
	largo=parseInt(largo);
	perimetro=parseInt(perimetro);
	pintura=parseInt(pintura);

	perimetro=ancho*2+largo*2;
	pintura=perimetro/3;
	alert("El perimetro es "+perimetro+" y se necesitan "+pintura+" litros de pintura");


}
