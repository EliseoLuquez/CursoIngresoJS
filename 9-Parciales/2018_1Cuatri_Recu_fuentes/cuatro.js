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
	var divison;
    numeroUno=prompt("Ingrese un numero");
    numeroDos=prompt("Ingrese un numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);	
	
	divison=numeroUno/numeroDos;	
	if(numeroUno==numeroDos)
	{
        alert(numeroUno++numeroDos);//falta que salgan concatenados
	}
	else if(numeroUno>numeroDos)
	{
		alert(divison);
	}
	else if(numeroUno<numeroDos)
	{
	
		suma=numeroUno+numeroDos;
		alert(suma);	
	}
	if(suma>50)
	{
		alert("La suma es "+suma+" y es mayor a 50");
	}

}
