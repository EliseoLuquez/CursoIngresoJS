function mostrar()
{
	/*Bienvenidos. 
	Pedir por prompt el precio y el porcentaje de descuento, mostrar: 
	1-El descuento en dinero, 
	2-El precio con el descuento , 
	3-El IVA 
	todos los anteriores e un solo alert 
	4-Y solo el precio con descuento más el IVA por id .
	*/



	var precio;
	var pordentajeDescuento;
	var iva;
	var descuentoEnDinero;
	var precioFinal;
	var precioConDescuento;

	precio=prompt("Ingrese el precio");
	pordentajeDescuento=prompt("Ingrese el porcentaje de descuento");

	precio=parseInt(precio);
	pordentajeDescuento=parseInt(pordentajeDescuento);
	iva=parseInt(iva);
	descuentoEnDinero=parseInt(descuentoEnDinero);
	precioFinal=parseInt(precioFinal);
	precioConDescuento=parseInt(precioConDescuento);
	
	descuentoEnDinero=(precio*pordentajeDescuento)/100;
	precioConDescuento=precio-descuentoEnDinero;
	iva=precioConDescuento*0.21;
	precioFinal=precioConDescuento+iva;	

	alert("El descuento en dinero es "+descuentoEnDinero+" el precio con descuento es "+precioConDescuento+" y el iva es "+iva);
	document.getElementById('elPrecioFinal').value=precioFinal;

























}	
