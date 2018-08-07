function mostrar()
{
/*
		Bienvenidos. 
	Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 
	(validar), 
	la temperatura de almacenamiento(entre -30 y 30)
	 hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
	a) La cantidad de temperaturas pares. 
	b) La marca del producto más pesado 
	c) La cantidad de productos que se conservan a menos de 0 grados. 
	d) El promedio del peso de todos los productos.	
	f) El peso máximo y el mínimo.

	Testeo con los siguientes valores 
	(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
	(m=teem;p = 10; t =0 ) 
	(m=llut;p = 150(mal), 15(bien); t =-13 ) 
	(m=fpy;p = 45; t =-12 )
	*/

	var marca;
	var peso;
	var temperatura;
	var respuesta;
	var temperaturaPar;
	var pesoMaximo;
	var pesoMinimo;
	var marcaPesoMaximo;
	var contador;
	var marcasACeroGrados;
	var acumuladorDePeso;
	var promedio;
	
	temperaturaPar=0;
	marcaPesoMaximo=0;
	pesoMinimo=0;
	pesoMaximo=0;
	marcasACeroGrados=0;
	acumuladorDePeso=0;
	contador=0;



	respuesta="si";


	while(respuesta!="no")
	{
		contador++;
		marca=prompt("ingrese marca");

		peso=prompt("ingrese peso");
		peso=parseInt(peso);
		acumuladorDePeso+=peso;
		while(isNaN(peso)||peso<1||peso>100)
		{
			peso=prompt("ingrese peso valido");
			peso=parseInt(peso);	
		}	

		temperatura=prompt("ingrese temperatura");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)||temperatura<-30||temperatura>30)
		{
			temperatura=prompt("ingrese temperatura valida");
			temperatura=parseInt(temperatura);	
		}	

		if(temperatura%2==0)
		{
			temperaturaPar++;
		}	
		
		if(contador==1)
		{
			pesoMaximo=peso;
			pesoMinimo=peso;
			marcaPesoMaximo=peso;
		}
		else if(peso>pesoMaximo)
		{
			pesoMaximo=peso;
			marcaPesoMaximo=marca;
		}
		else if(peso<pesoMinimo)
		{
			pesoMinimo=peso;
		}

		if(temperatura<0)
		{
			marcasACeroGrados++;
		}


			




		respuesta=prompt("¿desea continuar?");
	}

	promedio=acumuladorDePeso/contador;
	document.write("Temperaturas pares "+temperaturaPar);
	document.write("<br />Marca del producto mas pesado"+marcaPesoMaximo);
	document.write("<br />Cantidad de productos menores a cero grados"+marcasACeroGrados);
	document.write("<br />promedio de peso "+promedio);
	document.write("<br />peso maximo "+pesoMaximo);
	document.write("<br />peso mínimo "+pesoMinimo);















}
