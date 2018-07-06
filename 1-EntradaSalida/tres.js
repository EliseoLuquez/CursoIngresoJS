function mostrar()
{
	var precio;
	var descuento;
	var preciocondescuento;

	precio = prompt("Ingrese el precio: ");
	descuento = prompt("ingrese el  porcentaje de descuento: ")
	precio = parseInt(precio);
	descuento = parseInt(descuento);
	preciocondescuento = precio/100*descuento;

	alert("Descuento:" + preciocondescuento + "Precio c/descuento: ");
		
}
