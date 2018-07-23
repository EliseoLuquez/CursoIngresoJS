/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numero;

function comenzar()
{
	 numeroSecreto = Math.floor(Math.random() * 100)+1;//Genero el número RANDOM entre 1 y 100
	 contadorIntentos = 1;
	 alert(numeroSecreto);
	

}

function verificar()
{
	
	numero = document.getElementById('numero').value;


	if(numero==numeroSecreto&&contadorIntentos<=1)//1° intento: “usted es un Psíquico”.
	{ 
		alert("Usted es un Psíquico!!!");
	}else {
		if(numero==numeroSecreto&&contadorIntentos==2)//2° intento: “excelente percepción”.
		{
			alert("Excelente percepción!!!");
			
	}else{
		if(numero==numeroSecreto&&contadorIntentos==3)//3° intento: “Esto es suerte”.
		{
			alert("Esto es suerte!!!");
				
	}else{
		if(numero==numeroSecreto&&contadorIntentos==4)//4° intento: “Excelente técnica”.
		{
			alert("Excelente técnica!!!");
	}else{
		if(numero==numeroSecreto&&contadorIntentos==5)//5° intento: “usted está en la media”.
		{
			alert("Usted está en la media");
	}else{
		if(numero==numeroSecreto&&contadorIntentos>=6&&contadorIntentos<=10)//Desde  6 Intentos hasta 10:”falta técnica”
		{
			alert("Falta técnica");
	}else{
		if(numero==numeroSecreto&&contadorIntentos>10)//Más de 10 intentos: “afortunado en el amor!!”.*/
		{
			alert("Afortunado en el amor!!")
		}
		}
	}
	}
	}
	}
	}
	document.getElementById('intentos').value = contadorIntentos;
	contadorIntentos = contadorIntentos + 1;

}