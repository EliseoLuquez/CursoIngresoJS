function mostrar()
{
/*(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".
*/
	
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=prompt("Ingrese un numero");
	numeroDos=prompt("Ingrese un numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	suma=parseInt(suma);
	suma=numeroUno+numeroDos;

	if(numeroUno==numeroDos)
	{
		alert(numeroUno+""+numeroDos);
	}
	else if(numeroUno>numeroDos)
	{
		alert(numeroUno/numeroDos);
	}
	else if(numeroUno<numeroDos)
	{
		if(suma<50)
		{
			alert("La suma es "+suma+" y es menor a 50");
		}

	}
}
