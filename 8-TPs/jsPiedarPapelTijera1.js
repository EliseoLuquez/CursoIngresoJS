/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionJugador;
var piedra;
var papel;
var tijera;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3)+1;
	alert(eleccionMaquina);
	piedra = 1;
	papel = 2;
	tijera = 3;


}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina==1&&eleccionJugador==1)
	{
		alert("Has empatado!");
	}else{
		if(eleccionMaquina==1&&eleccionJugador==2)
		{
			alert("Has ganado!")
	}else{
		if(eleccionMaquina==1&&eleccionJugador==3)
		{
			alert("Has ganado!");
		}
	}
	}

}//FIN DE LA FUNCIÓN
function papel()
{


}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN