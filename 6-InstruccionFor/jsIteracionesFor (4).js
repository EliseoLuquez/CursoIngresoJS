function mostrar()
{//al presionar el botón repetir hasta que utilizamos 'BREAK'.

	var contador;
	contador=0;
	
	for(;;) 
	{
		console.log(contador);
		contador++;

		if(contador==5){


		break;
		}
	}
	
	console.log("Final "+contador);



}//FIN DE LA FUNCIÓN