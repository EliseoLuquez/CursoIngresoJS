function mostrar()
{
	/*
	Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
d) El sexo y la nota del más joven 
d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer.
*/

	var notas;
	var edad;
	var sexo;
	var mensaje;
	var contador;
	var promedio;
	var acumuladorNotas;
	var notaMasBaja;
	var notaMasAlta;
	var sexoNotaMasBaja;
	var sexoNotaMasAlta;
	var varonesMayores;
	var notaMasJoven;
	var sexoMasJoven;
	var sexoNotaMasJoven;
	var edadMasBaja;
	var contadorMujeres;
	var notaPrimeraMujer;
	var edadPrimeraMujer;

	contador=0;
	acumuladorNotas=0;
	varonesMayores=0;
	contadorMujeres=0;

	varonesMayores=parseInt(varonesMayores);
	




	while(contador<5)
	{
		contador++;
		notas=prompt("Ingrese nota");
		notas=parseInt(notas);
		acumuladorNotas+=notas;
		while(isNaN(notas)||notas<0||notas>10)
		{
			notas=prompt("Ingrese nota valida");
			notas=parseInt(notas);
		}

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad)||edad<16||edad>60)
		{
			edad=prompt("Ingrese edad valida");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingrese sexo f o m ");
		while(!isNaN(sexo)||sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Ingrese sexo valido, f o m ");
		}
	
		if(contador==1)
		{
			notaMasBaja=notas;
			sexoNotaMasBaja=sexo;
		}
		else if(notas<notaMasBaja)
		{
			notaMasBaja=notas;
			sexoNotaMasBaja=sexo;
		}
	
		if(edad>17&&notas>5)
		{
			varonesMayores++;
		}

		if(contador==1)
		{
			notaMasJoven=notas;
			sexoNotaMasJoven=sexo;
		}
		else if(edad<edadMasBaja)
		{
			notaMasJoven=notas;
			sexoNotaMasJoven=sexo;
		}
		if(sexo=="f"&&contadorMujeres==0)
		{
			contadorMujeres++;
			notaPrimeraMujer=notas;
			edadPrimeraMujer=notas;
		}




	}







	promedio=acumuladorNotas/contador;
	alert("Promedio de notas: "+promedio);
	alert(" La nota mas baja es "+notaMasBaja+" y su sexo es "+sexoNotaMasBaja);
	alert(" cantidad mayores "+varonesMayores);
	alert(" El sexo de la nota mas joven "+sexoNotaMasJoven+" y su nota "+notaMasJoven);
	alert("Edad primera mujer "+varonesMayores);

	if(contadorMujeres>0)
	{
		alert("Edad primera mujer "+edadPrimeraMujer+" nota primera mujer ingresada "+notaPrimeraMujer);
	}
	else
	{
		alert("No se ingresaron mujeres");
	}
	

	/* dentro del while
	var contador mujeres;
	if(sexo=="f"&&contadormujeres==0)		
	{
		contadormujeres++;
		o existemujeres=true;
	}
	fuera del while
	if(contadormujere>0)
	{
	
	}*/
	
























}
