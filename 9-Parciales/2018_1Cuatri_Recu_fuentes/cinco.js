function mostrar()
{
/*Bienvenidos. 
(SWITCH)pedir el ingreso de un día de la semana, 
si es fin de semana mostrar " buen finde", 
si es día hábil “ a trabajar”, 
si no es un día valido, también informarlo, 
usar una sola ventana alert.*/
	
	//swich
	/*
	var dias;
	dias=prompt("Ingrese un dia de la semana");
	switch(dias)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			alert("A trabajar!");
			break;
		case "sabado":
		case "domingo":
			alert("Buen finde!");
			break;
		default:
			alert("No es un dia valido");	
	}
	*/


	//if

	var dias;

	dias=prompt("Ingrese un dia de la semana");

	if(dias=="sabado"||dias=="domingo")
	{
		alert("Buend finde!");
	}
	else if(dias=="lunes"||dias=="martes"||dias=="miercoles"||dias=="jueves"||dias=="viernes")
	{
		alert("A trabajar!");
	}
	else
	{
	alert("No es un dia valido");	
	}






}
