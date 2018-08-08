function mostrar()
{
	//alert("comentar esta linea 4");

	var numeroUno;
	var numeroDos;
	var numeroTres;

	numeroUno=prompt("ingrese un numero");
	numeroDos=prompt("ingrese un numero");
	numeroTres=prompt("ingrese un numero");

	if(numeroUno<numeroDos&&numeroUno<numeroTres)
	{
		alert("este numero es el menor "+numeroUno);
	}
	else if(numeroDos<numeroUno&&numeroDos<numeroTres)
	{
		alert("este numero es el menor "+numeroDos);
	}
	else if(numeroTres<numeroDos&&numeroTres<numeroUno)
	{
		alert("este numero es el menor "+numeroTres);
	}

		
	if(numeroUno>numeroDos&&numeroUno>numeroTres)
	{
		alert("este numero es el mayor "+numeroUno);
	}
	else if(numeroDos>numeroUno&&numeroDos>numeroTres)
	{
		alert("este numero es el mayor "+numeroDos);
	}
	else if(numeroTres>numeroDos&&numeroTres>numeroUno)
	{
		alert("este numero es el mayor "+numeroTres);
	}

}
