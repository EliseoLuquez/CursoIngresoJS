function mostrar()
{
	/*
	Bienvenidos. 
	Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra
	 y un número entre -100 y 100 (validar)
	  hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
	a) La cantidad de números pares. 
	b) La cantidad de números impares. 
	c) La cantidad de ceros. 
	d) El promedio de todos los números positivos ingresados. 
	e) La suma de todos los números negativos. 
	f) El número y la letra del máximo y el mínimo.
	Testeo con los siguientes datos 
	( d , -150(mal) , -50(bien)) 
	( z , 0) 
	( g , 20) 
	( a , 150(mal) , 0(bien)) 
	( b , 3) 
	( k , 7)


	*/

	var letra;
	var numero;
	var respuesta;
	var numerosPares;
	var numerosImpares;
	var contadorDeCeros;
	var acumuladorDePositivos;
	var acumuladorDeNegativos;
	var promedioPositivos;
	var contadorPositivos;
	var contador;
	var numeroMaximo;
	var numeroMinimo;
	var patron;

	contador=0;
	numerosPares=0;	
	numerosImpares=0;
	contadorDeCeros=0;
	acumuladorDeNegativos=0;
	acumuladorDePositivos=0;
	contadorPositivos=0;
	numeroMaximo=0;
	numeroMinimo=0;
	patron=/[a-z]{1}/;



	respuesta="si";

	while(respuesta=="si")
	{		
		contador++;

		letra=prompt("Ingrese una letra");
		while(!isNaN(letra))
		{
			letra=prompt("Ingrese una letra valida");
		}

		numero=prompt("Ingrese una numero");
		numero=parseInt(numero);
		while(isNaN(numero)||numero<-100||numero>100)
		{
			numero=prompt("Ingrese una numero valido");
			numero=parseInt(numero);
		}

	if(numero%2==0)
	{
		numerosPares++;
	}	
	else
	{
		numerosImpares++;
	}

	if(numero==0)
	{
		contadorDeCeros++;
	}	

	if(numero>0)
	{
		contadorPositivos++;
		acumuladorDePositivos+=numero;
	}
	else if(numero<0)
	{
		
		acumuladorDeNegativos+=numero;
	}	

	if(contador==1)
	{
		numeroMinimo=numero;
		numeroMaximo=numero;
	}
	else if(numero>numeroMaximo)
	{
		numeroMaximo=numero;
	}
	else if(numero<numeroMinimo)
	{
		numeroMinimo=numero;
	}


	




		respuesta=prompt("¿Desea continuar?");

	}
	

	promedioPositivos=acumuladorDePositivos/contadorPositivos;
	document.write("numeros pares "+numerosPares);
	document.write("<br />numeros impares "+numerosImpares);
	document.write("<br />ceros "+contadorDeCeros);
	document.write("<br />promedio de positivos "+promedioPositivos);
	document.write("<br />suma de los negativos "+acumuladorDeNegativos);
	document.write("<br />numero maximo "+numeroMaximo);
	document.write("<br />numero minimo "+numeroMinimo);
	



}
