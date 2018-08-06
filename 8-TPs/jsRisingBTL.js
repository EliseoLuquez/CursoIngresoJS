/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas 
y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente
 (para evitar hacking y cargas maliciosas)
 y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{	
	var contador;
 	var edad;
 	var sexo;
 	var sueldoBruto;
 	var estadoCivil;
 	var numeroDeLegajo;
 	var nacionalidad;


 	
 	
 		edad=prompt("Ingrese su edad: ");
 		edad=parseInt(edad);
 		while(isNaN(edad)||edad<18||edad>90)
 		{
 			edad=prompt("Ingrese edad valida: ");
 			edad=parseInt(edad);
 		}

 		sexo=prompt("Ingrese su sexo F o M");
 		while(!isNaN(sexo)||sexo!="F"&&sexo!="M")
 		{
 			sexo=prompt("Ingrese sexo valido F o M");
 		}

 		estadoCivil=prompt("¿Estado civil? 1-para soltero, 2-para casado, 3-para divorciado y 4-para viudo");
 		estadoCivil=parseInt(estadoCivil);

 		while(isNaN(estadoCivil)||estadoCivil<1||estadoCivil>4)	
		{
 		estadoCivil=prompt("Ingrese estado civil valido 1-para soltero, 2-para casado, 3-para divorciado y 4-para viudo");
 		estadoCivil=parseInt(estadoCivil);

 		}
 		if(estadoCivil==1)
 		{
 			estadoCivil="Soltero";
 		}
 		else if(estadoCivil==2)
 		{
 			estadoCivil="Casado";
 		}
 		else if(estadoCivil==3)
 		{
 			estadoCivil="Divorsiado";
 		}
 		else if(estadoCivil==4)
 		{
 			estadoCivil="Viudo";
 		}
 												
 		sueldoBruto=prompt("Ingrese sueldo Bruto");
 		sueldoBruto=parseInt(sueldoBruto);
 		while(isNaN(sueldoBruto)||sueldoBruto<8000)
 		{
 	 		sueldoBruto=prompt("Ingrese sueldo Bruto valido");
 			sueldoBruto=parseInt(sueldoBruto);
 		}

 		numeroDeLegajo=prompt("Ingrese numero de legajo");
 		numeroDeLegajo=parseInt(numeroDeLegajo);
 		while(isNaN(numeroDeLegajo)||numeroDeLegajo<1000||numeroDeLegajo>9999)
 		{
 			numeroDeLegajo=prompt("Ingrese numero de legajo valido");
 			numeroDeLegajo=parseInt(numeroDeLegajo);
 		}
 		nacionalidad=prompt("Ingrese nacionalidad");
 		while(!isNaN(nacionalidad)||nacionalidad!="A"&&nacionalidad!="E"&&nacionalidad!="N")
 		{
 			nacionalidad=prompt("Ingrese nacionalidad valida");
 		}	
 		if(nacionalidad=="A")
 		{
 			nacionalidad="Argentino";
 		}
 		else if(nacionalidad=="E")
 		{
 			nacionalidad="Exreanjero";
 		}
 		else if(nacionalidad=="N")
 		{
 			nacionalidad="Nacionalizado";
 		}

 		


 		document.getElementById('Edad').value=edad;
 		document.getElementById('Sexo').value=sexo;
 		document.getElementById('EstadoCivil').value=estadoCivil;
 		document.getElementById('Sueldo').value=sueldoBruto;
 		document.getElementById('Legajo').value=numeroDeLegajo;
 		document.getElementById('Nacionalidad').value=nacionalidad;

 










} 		
