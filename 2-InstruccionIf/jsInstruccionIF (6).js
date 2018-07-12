function mostrar()
{
//tomo la edad 
	var edad;

	edad = document.getElementById('edad').value;

	if(edad<13)
	{
		alert("Eres un niño");
	} 
			else {
				if(edad>17)
					{
						alert("Eres mayor de edad");	
					}

							else {
								if(edad<18)
								{
									alert("Eres adolescente");
								}

						}
					}			

	


}//FIN DE LA FUNCIÓN