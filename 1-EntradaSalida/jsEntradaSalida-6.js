/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	/*var primerNumero;
	var segundoNumero;
	var resultado;
	document.getElementById('numeroUno').value;
	document.getElementById('numeroDos').value;
	resultado = parseInt;*/

	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById('numeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('numeroDos').value;
	numeroDos = parseInt(numeroDos);

	

	resultado = numeroUno+numeroDos;
	alert(resultado); 
	/*El signo + sirve para Sumar y para Concatenar, cuando le pasamos un texto lo concatena, cuando es numero lo Suma
	prompt y getelementarybyid devuelven texto
	el parseint transforma el "2" en un 2, en la misma variable*/
	
}

