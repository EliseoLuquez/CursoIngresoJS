function mostrar()
{	
	/*Bienvenidos. 
	Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10)
	,la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
	a) El promedio de las notas totales. 
	b) La nota más baja y el sexo de esa persona. 
	c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
	d) El sexo y la nota del más joven 
	d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer.
	*/

	var nota;
	var edad;
	var sexo;
	var contador;
	var acumuladorNotas;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var contadorDeVaronesMayores;
	var edadMasBaja;
	var contadorMujeres;
	var edadPrimeraMujer;
	var notaPrimeraMujer;

	contador=0;
	acumuladorNotas=0;
	notaMasBaja=0;
	contadorDeVaronesMayores=0;
	contadorMujeres=0;


	while(contador<5)
	{	
		contador++;

		nota=prompt("Ingrese nota");
		nota=parseInt(nota);
		acumuladorNotas+=nota;
		while(isNaN(nota)||nota<0||nota>10)
		{
		nota=prompt("Ingrese nota valida");
		nota=parseInt(nota);
		}

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad)||edad<17||edad>55)
		{
		edad=prompt("Ingrese edad valida");
		edad=parseInt(edad);
		}	

		sexo=prompt("Ingrese sexo ");
		while(!isNaN(sexo)&&sexo!="m"&&sexo!="f")
		{
		sexo=prompt("Ingrese sexo valida");
		}	

		if(contador==1)
		{
			notaMasBaja=nota;
			sexoNotaMasBaja=sexo;
		}
		else if(nota<notaMasBaja)
		{
			notaMasBaja=nota;
			sexoNotaMasBaja=sexo;
		
		}

		if(sexo=="m"&&edad>17&&nota>5)
		{	
			contadorDeVaronesMayores++;
		}

		if(contador==1)
		{
			sexoNotaMasJoven=sexo;
			notaMasJoven=nota;
		}
		else if(edad<edadMasBaja)
		{	
			edadMasBaja=edad;
			sexoNotaMasJoven=sexo;
			notaMasJoven=nota;
		}

		if(sexo=="f"&&contadorMujeres==0)
		{
			contadorMujeres++;
			edadPrimeraMujer=edad;
			notaPrimeraMujer=nota;
		}






	}

	promedio=acumuladorNotas/contador;	
	alert("Promedio de notas "+promedio);
	alert("La nota mas baja es "+notaMasBaja);
	alert("El sexo de la nota mas baja es "+sexoNotaMasBaja);
	alert("Los mayores con nota superior o igual 6 son "+contadorDeVaronesMayores);
	alert("El sexo de la nota mas joven es "+sexoNotaMasJoven+" y su nota es "+notaMasJoven);

	if(contadorMujeres>0)
	{
		alert("La edad de la primera mujer ingresada es "+edadPrimeraMujer+" y su nota es "+notaPrimeraMujer);
	}
	else
	{
		alert("No hubo mujeres ingresadas");
	}

























}
