
function mostrar()
{
	var numeroUno;
	var	numeroDos;
	var numeroTres;
	var suma;
	var promedio;
	var resta;

	numeroUno = promt("Ingrese un numero:");
	numeroUno = parsInt(numeroUno);
	numeroDos = promt("Ingrese un numero:");
	numeroDos = parsInt(numeroDos);
	numeroTres = promt("Ingrese un numero:");
	numeroTres = parsInt(numeroTres);

	suma = numeroUno+numeroDos+numeroTres;
	promedio = suma/3;
	resta = numeroUno-numeroDos-NumeroTres;

	alert("Suma:"+ suma +"promedio:"+ promedio +"resta:"+ resta);




}

/*
	Se ingresan 3 numeros, informar en un 
	solo alert la suma, el promedio, y la
	 resta de los numeros tal cual como fueron ingresados.



*/