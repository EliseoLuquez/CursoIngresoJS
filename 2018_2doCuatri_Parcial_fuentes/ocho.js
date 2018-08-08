function mostrar()
{
	//alert("comentar esta linea 8");

	var respuesta;
	var titulo;
	var cantidadDeCapitulos;
	var tipo;
	var serieConCapiPares;
	var bandera;
	var nombreConMasCaps;
	var cantidadMaximaDeCap;
	var cantidadMinimaDeCap;
	var tipoSerieMenosCap;
	var acumuladorDeCap;
	var promedioCap;

	serieConCapiPares=0;
	cantidadMaximaDeCap=0;
	cantidadMinimaDeCap=0;
	acumuladorDeCap=0;
	bandera=0;

	respuesta="si";

	while(respuesta!="no")
	{
		bandera++;
		titulo=prompt("ingrese titulo");
		while(!isNaN(titulo))
		{
			titulo=prompt("ingrese titulo valido");
		}

			cantidadDeCapitulos=prompt("ingrese cantidad De Capitulos");
			cantidadDeCapitulos=parseInt(cantidadDeCapitulos);
			acumuladorDeCap=parseInt(acumuladorDeCap);
			acumuladorDeCap+=cantidadDeCapitulos;
		while(isNaN(cantidadDeCapitulos)||cantidadDeCapitulos<0)
		{
			cantidadDeCapitulos=prompt("ingrese cantidad De Capitulos valido");
			cantidadDeCapitulos=parseInt(cantidadDeCapitulos);
		}
	
		tipo =prompt("ingrese tipo d=drama, t=thriller, c=comedia y o=otras");
		while(!isNaN(tipo)||tipo!="d"&&tipo!="t"&&tipo!="c"&&tipo!="o")
		{
			tipo=prompt("ingrese tipo valido d=drama, t=thriller, c=comedia y o=otras");
		}

		if(cantidadDeCapitulos%2==0)
		{
			serieConCapiPares++;
		}

		if(bandera==1)
		{	
			nombreConMasCaps=titulo;
			cantidadMaximaDeCap=cantidadDeCapitulos;
			tipoSerieMenosCap=tipo;
		}	
		else if(cantidadDeCapitulos>cantidadMaximaDeCap)
		{
			cantidadMaximaDeCap=cantidadDeCapitulos;
			nombreConMasCaps=titulo;
		}
		else if(cantidadDeCapitulos<cantidadMinimaDeCap)
		{
			cantidadMinimaDeCap=cantidadDeCapitulos;
			tipoSerieMenosCap=tipo;
		}	










		respuesta=prompt("¿Desea continuar ingresando?");

	}
	promedioCap=acumuladorDeCap/bandera;
	document.write("la cantidad de series con Capitulos pares "+serieConCapiPares);
	document.write("<br />titulo de la serie con mas Capitulos "+nombreConMasCaps);
	document.write("<br />el tipo de la serie que tiene menos Capitulos es "+tipoSerieMenosCap);
	document.write("<br />el promedio de Capitulos es "+promedioCap);



















}


