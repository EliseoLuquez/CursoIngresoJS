function mostrar()
{
	//alert("comentar esta linea 3");

	var precioProducto;
	var nombreProducto;
	var cantidadDeProducto;
	var iva;
	var precioFinal;

	precioProducto=prompt("ingrese el precio del producto");
	nombreProducto=prompt("ingrese el nombre del producto");
	cantidadDeProducto=prompt("ingrese la cantidad del producto");

	precioProducto=parseInt(precioProducto);
	cantidadDeProducto=parseInt(cantidadDeProducto);
	iva=parseInt(iva);
	precioFinal=parseInt(precioFinal);

	iva=precioProducto*0.21;
	precioFinal=precioProducto*cantidadDeProducto+iva;


	alert("Compro la cantidad "+cantidadDeProducto+" del producto "+nombreProducto+" a un precio de "+precioFinal+" con iva incluido");

}
