function mostrar()
{
/*Bienvenidos. 
(SWITCH)pedir el ingreso de un día de la semana, 
si es fin de semana mostrar " buen finde", 
si es día hábil “ a trabajar”, 
si no es un día valido, también informarlo, 
usar una sola ventana alert.*/
	
	var dias;
	var mensaje;

	mensaje="Error";

	dias=prompt("Ingrese un dia de la semana");

	switch(dias)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
						mensaje="A trabajar";
						alert(mensaje);
						break;
		case "sabado":
		case "domingo":
						mensaje="Buen fin de semana";
						alert(mensaje);	
						break;			



	}




}
