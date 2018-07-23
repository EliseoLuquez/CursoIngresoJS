/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionJugador;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3)+1;
	//alert(eleccionMaquina);
	eleccionJugador = prompt("Elija un numero:Piedra(1), papel(2) o tijera(3) ");
	 

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
			alert("Has perdido!");
		}
	}
}

}//FIN DE LA FUNCIÓN
function papel()//2
{
	
	if(eleccionMaquina==2&&eleccionJugador==2)
	{
		alert("Has empatado!");
	}else{
		if(eleccionMaquina==1&&eleccionJugador==2)
		{
			alert("Has ganado!")
	}else{
		if(eleccionMaquina==3&&eleccionJugador==2)
		{
			alert("Has perdido!");
		}
	}
	}


}//FIN DE LA FUNCIÓN
function tijera()//3
{
		
	if(eleccionMaquina==3&&eleccionJugador==3)
	{
		alert("Has empatado!");
	}else{
		if(eleccionMaquina==2&&eleccionJugador==3)
		{
			alert("Has ganado!")
	}else{
		if(eleccionMaquina==1&&eleccionJugador==3)
		{
			alert("Has perdido!");
		}
	}
	}
}//FIN DE LA FUNCIÓN