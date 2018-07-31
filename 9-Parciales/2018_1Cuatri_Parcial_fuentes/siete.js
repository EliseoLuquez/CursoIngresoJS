/*
jose m 25 (no valido nombre)
maria f 16 (si valido f o m)
jesus m 33 (tiene que ir entre 0-100)
fer f 81

1-cantidad de mujeres:2
2-cantidad de hombre:2
3-cantidad de mayores de edad:3
4-cantidad de menores de edad:1

5-la edad mas baja:
6-la edad mas alta:
7-promedio de edad mujeres:
8-promedio de edad hombre:
9-promedio de edad total:

10-nombre del mas viejo:
11-nombre del mas joven:
12-sexo del mas viejo:
13-nombre de la mujer mas vieja:

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
	var catntidadDeMenoresDeEdad;
	var edadMasBaja;
	var edadMasAlta;

	contador=0;
	cantidadDeMujeres=0;
	cantidadDeHombres=0;
	cantidadDeMayoresDeEdad=0;
	cantidadDeMenoresDeEdad=0;
	edadMasAlta=0;
	edadMasBaja=0;


	while(contador<4)
	{
		contador++;
		nombre=prompt("Ingrese su nombre");
		
		sexo=prompt("Ingrese sexo f o m");
		while(sexo!="f"&&sexo!="m")
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
	}
	else
	{
		cantidadDeMujeres++;
	}
	if(edad>=18)
	{
		cantidadDeMayoresDeEdad++;
	}
	else
	{
		cantidadDeMenoresDeEdad++;
	}
	
	if(contador==0)
	{
		edadMasAlta=edad;
		edadMasBaja=edad;
	}
	else if(edad>edadMasAlta)
	{
		edadMasAlta=edad;
	}
	else if(edad<edadMasBaja)
	{
		edadMasBaja=edad;
	}
	







	}
	document.write("Cantidad de mujeres: "+cantidadDeMujeres);
	document.write("<br />Cantidad de hombres: "+cantidadDeHombres);
	document.write("<br />Cantidad de mayores de edad: "+cantidadDeMayoresDeEdad);
	document.write("<br />Cantidad de menores de edad: "+cantidadDeMenoresDeEdad);
	document.write("<br />Edad mas alta: "+edadMasAlta);
	document.write("<br />Edad mas baja: "+edadMasBaja);


}
