function mostrar()
{	
	/*
		Bienvenidos. 
	Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
	el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
	a) El promedio de las notas totales. 
	b) La nota más baja y el sexo de esa persona. 
	c) La cantidad de varones que su nota haya sido mayor o igual a 6.
	*/

	var nota;
	var sexo;
	var contador;
	var acumuladorNotas;
	var promedio;
	var notaMinima;
	var sexoNotaMinima;
	var contadorVaronesConSeisOMas;
	
	contador=0;
	acumuladorNotas=0;
	contadorVaronesConSeisOMas=0;

	while(contador<5)
	{
		contador++;

		nota=prompt("ingresar nota");
		nota=parseInt(nota);
		acumuladorNotas+=nota;
		while(isNaN(nota)||nota<0||nota>10)
		{
		nota=prompt("ingresar nota valida");
		nota=parseInt(nota);			
		}


		sexo=prompt("ingresar sexo f o m");

		while(!isNaN(sexo)&&sexo!="f"&&sexo!="m")
		{
		sexo=prompt("ingresar sexo valida f o m");
		}	

		if(contador==1)
		{
			notaMinima=nota;
			sexoNotaMinima=sexo;
		}
		else if(nota<notaMinima)
		{
			notaMinima=nota;
			sexoNotaMinima=sexo;
		}

		if(sexo=="m"&&nota>=6)
		{
			contadorVaronesConSeisOMas++;
		}





	}










	promedio=acumuladorNotas/contador;
	alert("Promedio de notas "+promedio);
	alert("nota minima "+notaMinima+" sexo nota minima "+sexoNotaMinima);
	alert("Cantida de varones con nota mayor o igual a seis es "+contadorVaronesConSeisOMas);

}
