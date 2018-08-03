function mostrar()
{
//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.

	var contador;
	var numero;
	contador=0;
	for(;;)
	{
		contador++;
		numero=prompt("Ingrese un numero");
		console.log("Cantidad de numero ingresados "+contador);
		if(numero==9)
		{
			break;
		}
	}
	console.log("El numero es "+numero);



}//FIN DE LA FUNCIÓN