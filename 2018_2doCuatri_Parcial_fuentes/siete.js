function mostrar()
{
	//alert("comentar esta linea 7");
	/*
	datos 
	ala, 2, 8, 50
	ela, 4, 6, 350
	ila, 6, 5, 50
	ula, 8, 3, 500
	ola, 10, 4, 100

	*/

	var nombre;
	var ancho;
	var alto;
	var peso;
	var contador;
	var pesoMaximo;
	var altoMaximo;
	var anchoMinimo;
	var contadorPesosDeMedianos;


	pesoMaximo=0;
	altoMaximo=0;
	anchoMinimo=0;
	contador=0;
	contadorPesosDeMedianos=0;

	while(contador<5)
	{
		contador++;

		nombre=prompt("ingrese nombre");
		while(!isNaN(nombre))
		{
			nombre=prompt("ingrese nombre valido");
		}

			ancho=prompt("ingrese ancho");
			ancho=parseInt(ancho);
		while(isNaN(ancho)||ancho>10||ancho<1)
		{
			ancho=prompt("ingrese ancho valido");
			ancho=parseInt(ancho);
		}

			alto=prompt("ingrese alto");
			alto=parseInt(alto);
		while(isNaN(alto)||alto>10||alto<1)
		{
			alto=prompt("ingrese alto valido");
			alto=parseInt(alto);
		}
			
			peso=prompt("ingrese peso");
			peso=parseInt(peso);
		while(isNaN(peso)||peso>1000||peso<1)
		{
			peso=prompt("ingrese peso valido");
			peso=parseInt(peso);
		}	



		if(contador==1)
		{
			pesoMaximo=peso;
		}
		else if(peso>pesoMaximo)
		{
			pesoMaximo=peso;
		}	

		if(contador==1)
		{
			altoMaximo=alto;
		}
		else if(alto>altoMaximo)
		{
			altoMaximo=alto;
		}

		if(contador==1)
		{
			anchoMinimo=ancho;
		}
		else if(ancho<anchoMinimo)
		{
			anchoMinimo=ancho;
		}

		if(peso>300&&peso<600)
		{
			contadorPesosDeMedianos++;
		}






	}




	document.write("el mas pesado "+pesoMaximo);
	document.write("<br />el mas alto "+altoMaximo);
	document.write("<br />el ancho minimo "+anchoMinimo);
	document.write("<br />cantidad que tieneun peso entre 300 y 600 "+contadorPesosDeMedianos);















}
