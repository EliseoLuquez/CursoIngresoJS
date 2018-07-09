function mostrar()
{
	var precio;
	var porcentajeDeDescuento;
	var precioFinal;

	precio = prompt("Precio: ");
	porcentajeDeDescuento = prompt("Porcentaje de descuento: ");

	precio = parseInt(precio);
	porcentajeDeDescuento = parseInt(porcentajeDeDescuento);
	precioFinal = parseInt(precioFinal);

	precioFinal = -porcentajeDeDescuento*precio/100+precio;

	document.getElementById('elPrecioFinal').value = precioFinal;//asi saca el resultado por Id



}
