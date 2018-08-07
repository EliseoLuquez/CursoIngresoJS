function mostrar()
{
		/*Bienvenidos. 
	Realizar el algoritmo que permita iterar el ingreso de varios libros con cuatro datos por cada libro,
	nombre, cantidad de páginas, cantidad de ventas (0 o más) y tema (posibles temas: “robótica", 
	"programación", "patrones", "base de datos”) 
	validar e ingresar datos hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
	a) La cantidad de libros con páginas pares. 
	b) La cantidad de libros con páginas impares. 
	c) La cantidad de ceros ventas. 
	d) El promedio de todas las ventas ingresadas. 
	e) La suma de todas las páginas de los de "programación".
	*/

	var respuesta;
	var libro;
	var nombre;
	var cantidadDePaginas;
	var cantidadDeVentas;
	var tema;
	var cantidadDeLibrosConPaginasPares;
	var cantidadDeLibrosConPaginasImpares;
	var cantidadDeVentasNulas;
	var acumuladorVentas;
	var acumuladorDePaginasProgramacion;
	var contador;
	var promedio;
	var mensaje;

	acumuladorVentas=0;
	acumuladorDePaginasProgramacion=0;
	contador=0;
	cantidadDeVentas=0;
	cantidadDeVentasNulas=0;
	cantidadDeLibrosConPaginasImpares=0;
	cantidadDeLibrosConPaginasPares=0;

	respuesta="si";
	while(respuesta=="si")
	{
		contador++;
		nombre=prompt("Ingrese el nombre del libro");

		cantidadDePaginas=prompt("Ingrese la cantidad de paginas");
		cantidadDePaginas=parseInt(cantidadDePaginas);
		while(isNaN(cantidadDePaginas)||cantidadDePaginas<0)
		{
			cantidadDePaginas=prompt("Ingrese la cantidad de paginas valida");
			cantidadDePaginas=parseInt(cantidadDePaginas);
		}

		cantidadDeVentas=prompt("Ingrese cantidad de ventas");
		cantidadDeVentas=parseInt(cantidadDeVentas);
		acumuladorVentas+=cantidadDeVentas;
		while(isNaN(cantidadDeVentas)||cantidadDeVentas<0)
		{
			cantidadDeVentas=prompt("Ingrese cantidad de ventas valida");
			cantidadDeVentas=parseInt(cantidadDeVentas);
		}

		tema=prompt("Ingrese el tema del libro");

		while(tema!="robotica"&&tema!="programacion"&&tema!="patrones"&&tema!="base de datos")
		{
			tema=prompt("Ingrese tema valido");
		}

		if(cantidadDePaginas%2==0)
		{
			cantidadDeLibrosConPaginasPares++;
		}
		else
		{
			cantidadDeLibrosConPaginasImpares++;
		}

		if(cantidadDeVentas==0)
		{
			cantidadDeVentasNulas++;
		}


		if(tema=="programacion")
		{
			acumuladorDePaginasProgramacion+=cantidadDePaginas;
		}

		









		respuesta=prompt("¿Desea continuar ingresando libros?");
	}


	promedio=acumuladorVentas/contador;
	document.write("La cantidad de libros con paginas pares es "+cantidadDeLibrosConPaginasPares);
	document.write("<br />La cantidad de libros con paginas impares es "+cantidadDeLibrosConPaginasImpares);
	document.write("<br />La cantidad de 0 ventas es "+cantidadDeVentasNulas);
	document.write("<br />El promedio de todas las ventas ingresadas es "+promedio);
	document.write("<br />La suma de todas las paginas de los libros de programacion es "+acumuladorDePaginasProgramacion);

	if(cantidadDeVentasNulas==0)
	{
		mensaje="No hay libros con 0 ventas";
		document.write("<br />"mensaje);
	}
	else
	{
		mensaje="La cantidad de libro con 0 ventas son "+cantidadDeVentasNulas;
		document.write("<br />"mensaje);
	}
}
