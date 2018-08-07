function mostrar()
{
	/*
	Bienvenidos. 
	(SWITCH)pedir el ingreso de un planeta del sistema solar 
	Si es la tierra mostrar "acá vivimos". 
	Si está más cerca del sol, "acá hace más calor". 
	Si está más lejos del sol, "acá hace más frio". 
	Si no es un planeta valido informarlo. 
	Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
	*/

	var planeta;
	var mensaje;

	mensaje="error";
	planeta=prompt("ingrese un planeta");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
				mensaje="Aca hace mas calor";
				alert(mensaje);
				break;
		case "tierra":
				mensaje="Aca vivimos";
				alert(mensaje);
				break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
				mensaje="Aca hace mas frio";
				alert(mensaje);
				break;
	}























}	
