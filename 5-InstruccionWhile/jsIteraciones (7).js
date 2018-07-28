function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta="si";// OJO ACA ESTA LA CLAVE DEL EJERCICIO! respuesta =si!!
	var numero;

	while(respuesta=="si"){//tiene q poder ser falso para que no sea un numero infinito!
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		acumulador+=numero;
		contador++;
		respuesta=prompt("Desea coninuar?");//pregunta para responder si para continuar, sino se detiene
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN