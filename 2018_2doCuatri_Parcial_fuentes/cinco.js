function mostrar()
{
	//alert("comentar esta linea 5");

	var mes;

	mes=prompt("ingrese un mes del año");

	switch(mes)
	{
			case "enero":
			case "marzo":
			case "mayo":
			case "julio":
			case "agosto":
			case "octubre":
			case "diciembre":
							alert("Este mes tiene 31 dias");
							break;
			case "febrero":
							alert("Este mes es febrero");
							break;
			case "abril":
			case "junio":
			case "septiembre":
			case "noviembre":
							alert("Este mes tiene 30 dias");
							break;	
			
	}









}

