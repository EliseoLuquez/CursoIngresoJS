function mostrar()
{
/*Bienvenidos. 
(SWITCH)pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/
	var planetas;

	planetas=prompt("Ingrese un planeta");

	switch(planetas){
			case "mercurio":
			case "venus":
					alert("Aca hace calor");
					break;						
			case "tierra":
					alert("Aca vivimos");
					break;	
			case "marte":
			case "jupiter":
			case "saturno":
			case "urano":
			case "neptuno":
					alert("Aca hace frio");
					break;
			default:
					alert("No es un planeta valido");					

	}

}
