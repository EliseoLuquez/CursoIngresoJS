function mostrar()
{
	var precio;
	var porcentajeDeDescuento;
	var iva;
	var precioConDescuento;
	var descuentoEnDinero;
	var precioFinal;

	precio = prompt("Ingrese el precio: ");
	porcentajeDeDescuento= prompt("Ingrese el porcentaje de descuento : ");
	
	precio = parseInt(precio);
	porcentajeDeDescuento = parseInt(porcentajeDeDescuento);
	iva = parseInt(iva);
	descuentoEnDinero = parseInt(descuentoEnDinero);
	precioConDescuento = parseInt(precioConDescuento);
	precioFinal = parseInt(precioFinal);


	descuentoEnDinero = precio*porcentajeDeDescuento/100;
	precioConDescuento = precio-descuentoEnDinero; 
	iva = precio*0.21;

	alert("El descuento en dinero es: "+descuentoEnDinero+" , el precio con descuento es: "+precioConDescuento+" , el IVA es: "+iva);
	precioFinal = precioConDescuento+iva;

	document.getElementById('elPrecioFinal').value = precioFinal;




}
