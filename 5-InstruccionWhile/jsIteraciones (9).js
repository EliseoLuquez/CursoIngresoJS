function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	maximo=-9999;
	minimo=+9999;

	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		if(numero>maximo)
		{
			maximo=numero;
		}
		if(numero<minimo)
		{
			minimo=numero;
		}

	


		respuesta=prompt("Desea seguir?");//siempre antes de salir
		}
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN