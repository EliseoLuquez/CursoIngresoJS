/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var centigrados;
	var temperaturaFahrenheit;

	temperaturaFahrenheit = document.	getElementById('Temperatura').value;
	temperaturaFahrenheit = parseInt(temperaturaFahrenheit);
	centigrados = parseInt(centigrados);
	centigrados = (temperaturaFahrenheit-32)/1.8;
	alert("La temperatura en F° es "+temperaturaFahrenheit+" y en C° es "+centigrados);
}

function CentigradosFahrenheit () 
{
	var temperaturaCentigrados;
	var temperaturaFahrenheit;

	temperaturaCentigrados = document.getElementById('Temperatura').value;
	temperaturaFahrenheit = parseInt(temperaturaFahrenheit);
	temperaturaCentigrados = parseInt(temperaturaCentigrados);
	temperaturaFahrenheit = (temperaturaCentigrados*1.8)+32;
	alert("La temperatura en C° es "+temperaturaCentigrados+" y en F° es "+temperaturaFahrenheit);
}
