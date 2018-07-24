var eleccionMaquina;
var contadorDeEmpates=0;
var contadorDeGanadas=0;
var contadorDePerdidas=0;

function comenzar()
{
	eleccionMaquina=Math.floor(Math.random() * 3)+1;//Genero el número RANDOM entre 1 y 3
	//alert(eleccionMaquina);	 	
	



}//FIN DE LA FUNCIÓN
function piedra()
{	
	if(eleccionMaquina==1)
	{
		alert("Has empatado!");
		contadorDeEmpates++;
	}else if(eleccionMaquina==3)
	{
		alert("Has ganado!");
		contadorDeGanadas++;
	}else 
	{
		alert("Has perdido!");
		contadorDePerdidas++;
	}
	comenzar();
	mostrarResultado();
	
	
}//FIN DE LA FUNCIÓN
function papel()
{	
	if(eleccionMaquina==2)
	{
		alert("Has empatado!");
		contadorDeEmpates++;
	}else if(eleccionMaquina==1)
	{
		alert("Has ganado!");
		contadorDeGanadas++;
	}else 
	{
		alert("Has perdido!");
		contadorDePerdidas++;
	}
	comenzar();
	mostrarResultado();
	
	
}//FIN DE LA FUNCIÓN
function tijera()
{	
	
	if(eleccionMaquina==3)
	{
		alert("Has empatado!");
		contadorDeEmpates++;
	}else if(eleccionMaquina==2)
	{
		alert("Has ganado!");
		contadorDeGanadas++;
	}
	else
	{
		alert("Has perdido!");
		contadorDePerdidas++;
	}
	comenzar();
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('ganadas').value=contadorDeGanadas;
	document.getElementById('perdidas').value=contadorDePerdidas;
	document.getElementById('empatadas').value=contadorDeEmpates;

}

