function mostrar()
{
	/*al presionar el botón pedir un 
	número. mostrar los numeros pares desde el 1 al número ingresado,
	 y mostrar la cantidad de numeros pares encontrados.
	 */

	var numeroIngresado;
	var divisores;
	var numeroAnterior;// =i
	var numerosRecorridos;//=j

	divisores=0;
	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numerosRecorridos=numeroIngresado;numerosRecorridos>1;numerosRecorridos--) //Ejemplos con "i" y "j"
	{	
		divisores=0;
		for(numeroAnterior=numerosRecorridos-1;numeroAnterior>1;numeroAnterior--)
		{
			if(numerosRecorridos%numeroAnterior==0)
			{
				divisores++;
				break;
			}
		}
			if(divisores==0)
	{
		console.log("Es primo "+numerosRecorridos);
	}

	}
	
	/*for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
	{
		if(numeroIngresado%numeroAnterior==0)
		{
			divisores++;
			break;
		}
		
	
	}
	if(divisores==0)
	{
		console.log("Es primo");
	}else
	{
		console.log("No es de los primos");
	}
	*/

}//FIN DE LA FUNCIÓN