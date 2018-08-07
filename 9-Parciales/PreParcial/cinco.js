function mostrar()
{
	/*Bienvenidos. 
	(SWITCH)pedir el ingreso de un día de la semana, 
	si es fin de semana mostrar " buen finde", 
	si es día hábil “ a trabajar”, 
	si no es un día valido, también informarlo, 
	usar una sola ventana alert.
	*/


	var dia;
	var mensaje;

	mensaje="Error";

	dia=prompt("Ingrese un dia de la semana");

	switch(dia)
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
					mensaje="Buend fin de semana";
					alert(mensaje);
					break;


	}






















}
