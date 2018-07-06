/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendo;
	var numeroDvisor;
	var resto;

	numeroDividendo = document.getElementById('numeroDividendo').value;
	numeroDividendo = parseInt(numeroDividendo);
	numeroDvisor = document.getElementById('numeroDivisor').value;
	numeroDvisor = parseInt(numeroDvisor);

	resto = numeroDividendo%numeroDvisor;
	alert(resto); 

}
