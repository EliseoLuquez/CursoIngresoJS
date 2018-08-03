/*
jose m 25 (no valido nombre)
maria f 16 (si valido f o m)
jesus m 33 (tiene que ir entre 0-100)
fer f 81

1-cantidad de mujeres:2
2-cantidad de hombre:2
3-cantidad de mayores de edad:3
4-cantidad de menores de edad:1

5-la edad mas baja:16
6-la edad mas alta:81
7-promedio de edad mujeres:48
8-promedio de edad hombre:29
9-promedio de edad total:38.75

10-nombre del mas viejo:jesus
11-nombre del mas joven:jose
12-sexo del mas viejo:f
13-nombre de la mujer mas vieja:fer

*/
function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contador;
	var cantidadDeMujeres;
	var cantidadDeHombres;
	var cantidadDeMayoresDeEdad;
	var cantidadDeMenoresDeEdad;
	var edadMasBaja;
	var edadMasAlta;
	var sumaEdadMujeres;
	var sumaEdadHombres;
	var promedioDeEdadMujeres;
	var promedioDeEdadHombres;
	var promedioTotal;
	var sumaEdadTotal;
	var sumaCantidadTotal;
	var elMasViejo;
	var laMasVieja;
	var laMasJoven;
	var elMasJoven;
	var nombreFemMasVieja;
	var nombreMascMasViejo;
	var nombreMascMasJoven;
	var sexoMaximo;

	contador=0;
	cantidadDeMujeres=0;
	cantidadDeHombres=0;
	cantidadDeMayoresDeEdad=0;
	cantidadDeMenoresDeEdad=0;
	edadMasAlta=0;
	edadMasBaja=999;
	sumaEdadMujeres=0;
	sumaEdadHombres=0;
	sumaEdadTotal=0;
	sumaCantidadTotal=0;
	laMasVieja=0;



	while(contador<4)
	{
		contador++;
		nombre=prompt("Ingrese su nombre");
		
		sexo=prompt("Ingrese sexo f o m");
		while(!isNaN(sexo)||sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Ingrese sexo valido f o m");
		}

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);

		while(isNaN(edad)||edad<0||edad>100)
		{
		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		}
	

	if(sexo=="m")
	{
		cantidadDeHombres++;
		sumaEdadHombres+=edad;
		if(edad>elMasViejo)
		{
			elMasViejo=edad;
			nombreMascMasViejo=nombre;
		}
		else if(edad<elMasJoven)
		{
			elMasJoven=edad;
			nombreMascMasJoven=nombre;
		}			
	}
	else
	{	
		cantidadDeMujeres++;
		sumaEdadMujeres+=edad;
		if(edad>laMasVieja)
		{
			laMasVieja=edad;
			nombreFemMasVieja=nombre;
		}
		else if(edad<laMasJoven)
		{
			laMasJoven=edad;
		}
	}
	if(edad>=18)
	{
		cantidadDeMayoresDeEdad++;
	}
	else
	{
		cantidadDeMenoresDeEdad++;
	}
	
	if(contador==1)
	{
		edadMasAlta=edad;
		edadMasBaja=edad;
	}
	else if(edad>edadMasAlta)
	{
		edadMasAlta=edad;
		sexoMaximo=sexo;
	}
	else if(edad<edadMasBaja)
	{
		edadMasBaja=edad;
	}
	
	

	
	promedioDeEdadMujeres=sumaEdadMujeres/cantidadDeMujeres;
	promedioDeEdadHombres=sumaEdadHombres/cantidadDeHombres;
	sumaEdadTotal=sumaEdadMujeres+sumaEdadHombres;
	sumaCantidadTotal=cantidadDeHombres+cantidadDeMujeres;
	promedioTotal=sumaEdadTotal/sumaCantidadTotal;






	}
	document.write("Cantidad de mujeres: "+cantidadDeMujeres);
	document.write("<br />Cantidad de hombres: "+cantidadDeHombres);
	document.write("<br />Cantidad de mayores de edad: "+cantidadDeMayoresDeEdad);
	document.write("<br />Cantidad de menores de edad: "+cantidadDeMenoresDeEdad);
	document.write("<br />Edad mas alta: "+edadMasAlta);
	document.write("<br />Edad mas baja: "+edadMasBaja);
	document.write("<br />Promedio de edad de mujeres: "+promedioDeEdadMujeres);
	document.write("<br />Promedio de edad de hombres: "+promedioDeEdadHombres);
	document.write("<br />Promedio de edad total: "+promedioTotal);
	document.write("<br />Nombre del mas joven: "+elMasJoven);
	document.write("<br />Nombre del mas viejo: "+elMasViejo);
	document.write("<br />Nombre de la mas vieja: "+nombreFemMasVieja);
	document.write("<br />Sexo del mayor: "+sexoMaximo);
}
