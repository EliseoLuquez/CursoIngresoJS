function mostrar()
{
	/*Bienvenidos. 
Pedir por prompt el precio y el porcentaje de descuento, mostrar: 
1-El descuento en dinero, 
2-El precio con el descuento , 
3-El IVA 
todos los anteriores e un solo alert 
4-Y solo el precio con descuento más el IVA por id 
*/

	var precio;
	var porcentajeDeDescuento;
	var descuento;
	var iva;
	var precioFinal;
	



	precio=prompt("ingrese precio");
	porcentajeDeDescuento=prompt("ingrese porcentajeDeDescuento");
	

	precio=parseInt(precio);
	porcentajeDeDescuento=parseInt(porcentajeDeDescuento);
	iva=parseInt(iva);
	precioFinal=parseInt(precioFinal);
	descuento=parseInt(precioFinal);

	descuento=precio*porcentajeDeDescuento/100;
	iva=(precio+descuento)*0.21;	

	precioFinal=(precio+iva)+descuento;

	alert("El precio es "+precio+" , el descuento es "+descuento+" y el iva es "+iva);
	document.getElementById('elPrecioFinal').value=precioFinal;

}
