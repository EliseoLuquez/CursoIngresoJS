function mostrar()
{
	/*Bienvenidos. 
	Se ingresa una nota. 
	Si está entre las 0 y las 3 mostrar: "la próxima se puede", 
	si es desde las 4 a las 6: "raspando", de lo contrario informar que aprobó. 
	Informar si la nota no es válida. 
	Si es aprobó y la nota es mayor a 8 se debe agregar el mensaje: "muy bien". 
	Si es nota para “raspando” y la nota es menor a 5 se debe agregar el mensaje: "debes preocuparte más". 
	Aclaración: hacer un switch y dentro toda la lógica incluyendo los if y con una sola ventana alert.
	*/

	var nota;
	var mensaje;
	
	mensaje="No es una nota";

	nota=document.getElementById('laHora').value;
	nota=parseInt(nota);

	switch(nota)
	{
		case 0:
		case 1:
		case 2:
		case 3:
				mensaje="La proxima se puede";
				alert(mensaje);
				break;
		case 4:
		case 5:
		case 6:
				if(nota<5)
				{
					mensaje="Raspando, debes preocuparte mas";
					alert(mensaje);

				}
				else if(nota>4)
				{	
					mensaje="Raspando";
					alert(mensaje);
				}
				break;
		case 7:		
		case 8:
		case 9:
		case 10:
				if(nota>7)
				{
					mensaje="Muy bien";
					alert(mensaje);
				}
				else
				{
					mensaje="Aprobo";
					alert(mensaje);
				}
				break;
	alert(mensaje);
	}

	



























}
