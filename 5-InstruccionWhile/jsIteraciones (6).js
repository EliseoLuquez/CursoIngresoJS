function mostrar()
{//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

	var contador=0;
	var acumulador=0;
	var suma;
	suma=parseInt(suma);
	
	while(contador<5){
		contador++;
		acumulador=prompt("Ingrese un numero");
		acumulador=parseInt(acumulador);
		suma+=acumulador;
		

		

	}



document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;

}//FIN DE LA FUNCIÓN