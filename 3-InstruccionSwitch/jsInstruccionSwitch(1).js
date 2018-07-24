function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;
/*
	Evalua una expresion en un conjunto de valores
	valores :
	switch(expresion){
	case 1:
	{
		codigo...;
		break;
	}		
	case 2:
	{
		codigo...;
		break; Para la ejecucion!
	}
	default:				
	}		
*/
switch(mes){
	case "Enero":
	{
		alert("Comienza bien el año!!");
		break;
	}
	case "Marzo":
	{
		alert("A clases!!");		
		break;
	}	
	case "Julio":
	{
		alert("Se vienen las vacaciones!!");
		break;
	}
	case "Diciembre":
	{
		alert("Felices fiestas!!");
		break;						
	}		
}




}//FIN DE LA FUNCIÓN