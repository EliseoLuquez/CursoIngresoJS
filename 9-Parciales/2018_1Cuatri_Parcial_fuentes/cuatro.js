function mostrar()
{
	/*
		Bienvenidos. 
	(IF)Pedir dos números y mostrar el resultado: 
	Si son iguales los muestro concatenados. 
	Si el primero es mayor, los resto, 
	de lo contrario los sumo. 
	Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
	"la suma es xxx y supero el 10".
	*/

	var numeroUno;
	var numeroDos;
	var suma;


	numeroUno=prompt("ingrese un numero");
	numeroDos=prompt("ingrese un numero");

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
	else if(numeroUno<numeroDos&&suma>10)
	{
		alert("la suma es "+suma+" y supero el 10");
	}
	else
	{
		alert(suma);
	}













}
