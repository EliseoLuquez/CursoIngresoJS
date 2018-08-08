function mostrar()
{
	//alert("comentar esta linea 6");

	var estacion;
	var temperatura;
	var mensaje;
	mensaje="Error";

	estacion=prompt("igrese estacion del año");
	temperatura=prompt("ingrese temperatura");
	temperatura=parseInt(temperatura);

	switch(estacion)
	{
		case "invierno":
						if(temperatura<7&&temperatura>0)
						{
							mensaje="Que fresquete";
						}
								
						break;
		case "primavera":
		case "verano":	
						if(temperatura>31)
						{
							mensaje="Es un horno!!";
						}else if(temperatura<32&&temperatura>19)
						{
							mensaje="Que calorcito!!";
						}	
						break;
		case "otoño":	
						if(temperatura==15)
						{
							mensaje="Esta lindo!";
						}
						else if(temperatura<16)
						{
							mensaje="Se vino el frio!";	
						}	
						else if(temperatura>14&&temperatura<21)
						{
							mensaje="Esta re bueno!";
						}
						else if(temperatura>19)
						{
							mensaje="Mucho calor para el otoño";
						}	
						break;		
	}

	alert(mensaje);













}
