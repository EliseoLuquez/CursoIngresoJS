var eleccionMaquina;
var eleccionJugador;
var contadorDeEmpates=0;
var contadorDeGanadas=0;
var contadorDePerdidas=0;

function comenzar()
{
	eleccionMaquina=Math.floor(Math.random() * 3)+1;//Genero el número RANDOM entre 1 y 3
	//alert(eleccionMaquina);	 	
	eleccionJugador = prompt("Elija un numero:Piedra(1), papel(2) o tijera(3) ");



}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina==1&&eleccionJugador==1)
	{
		alert("Has empatado!");
		contadorDeEmpates=contadorDeEmpates+1;
	}else
	{
	if(eleccionMaquina==1&&eleccionJugador==2)
	{
		alert("Has ganado!");
		contadorDeGanadas=contadorDeGanadas+1;
	}else
	{
	if(eleccionMaquina==1&&eleccionJugador==3)
	{
		alert("Has perdido!");
		contadorDePerdidas=contadorDePerdidas+1;
	}
	}
	}
}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina==2&&eleccionJugador==2)
	{
		alert("Has empatado!");
		contadorDeEmpates=contadorDeEmpates+1;
	}else
	{
	if(eleccionMaquina==1&&eleccionJugador==2)
	{
		alert("Has ganado!");
		contadorDeGanadas=contadorDeGanadas+1;
	}else
	{
	if(eleccionMaquina==3&&eleccionJugador==2)
	{
		alert("Has perdido!");
		contadorDePerdidas=contadorDePerdidas+1;
	}
	}
	}
}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina==3&&eleccionJugador==3)
	{
		alert("Has empatado!");
		contadorDeEmpates=contadorDeEmpates+1;
	}else
	{
	if(eleccionMaquina==2&&eleccionJugador==3)
	{
		alert("Has ganado!");
		contadorDeGanadas=contadorDeGanadas+1;
	}
	else
	{
	if(eleccionMaquina==1&&eleccionJugador==3)
	{
		alert("Has perdido!");
		contadorDePerdidas=contadorDePerdidas+1;
	}
	}
	}
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	
	document.getElementById('ganadas').value=contadorDeGanadas;
	document.getElementById('perdidas').value=contadorDePerdidas;
	document.getElementById('empatadas').value=contadorDeEmpates;
	
}