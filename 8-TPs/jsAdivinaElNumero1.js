/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numero;
contadorIntentos = parseInt(contadorIntentos);
numero = document.getElementById('numero').value;
document.getElementById('intentos').value = contadorIntentos
numero = parseInt(numero);

function comenzar()
{
	
	numeroSecreto = Math.floor(Math.random() * 100)+1; //Genero el número RANDOM entre 1 y 100  

	//alert(numeroSecreto );
	

}

function verificar()
{	
	if(numeroSecreto==numero)
	{
		alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
		contadorIntentos +=1;
	}else {
		if(numero<numeroSecreto){
			contadorIntentos +=1;
			alert("Usted lleva "+contadorIntentos+" intentos, aun le falta");	
		}else{
			if(numero>numeroSecreto)
			{
				contadorIntentos +=1;
				alert("Usted lleva "+contadorIntentos+" intentos y te has pasado");	
			}
		}
	}
	
}