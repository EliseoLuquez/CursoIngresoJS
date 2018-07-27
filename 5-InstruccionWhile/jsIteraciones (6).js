function mostrar()
{

	var contador=0;
	var acumulador=0;
	var suma;

	while(contador<5){
		acumulador=prompt("Ingrese un numero");
		acumulador=parseInt(acumulador);
		suma=parseInt(suma);
		suma=acumulador;
		acumulador+=suma;
		contador++;

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN