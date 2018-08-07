function mostrar()
{	
	/*
		Bienvenidos. 
	Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
	*/

	var precio;
	var porcentajeDeDescuento;
	var descuento;
	var precioFinal;

	precio=prompt("ingrese el precio");
	porcentajeDeDescuento=prompt("ingrese el porcentaje de descuento");

	descuento=precio*porcentajeDeDescuento/100;
	precioFinal=precio-descuento;

	document.getElementById('elPrecioFinal').value=precioFinal;










}
