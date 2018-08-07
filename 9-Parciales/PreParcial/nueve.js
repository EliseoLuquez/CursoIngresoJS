function mostrar()
{	
	/*Enunciado:
	Bienvenidos. 
	Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, 
	el peso el cual debe ser entre 1 y 1000 y 
	la temperatura del hábitat (entre -30 y 30)
	 hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
	a) La cantidad de temperaturas pares. 
	b) El nombre y temperatura del animal más pesado 
	c) La cantidad de animales que viven a menos de 0 grados. 
	d) El promedio del peso de todos los animales.	
	f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
	*/

	var nombreAnimal;
	var pesoAnimal;
	var temperaturaHabitat;
	var cantidadDeTemperaturasPares;
	var nombreAnimalMasPesado;
	var temperaturaAnimalMasPesado;
	var contador;
	var animalMasPesado;
	var animTempMenoresACero;
	var acumuladorPesoAnimal;
	var promedio;
	var animalMenosPesadoBajoCero;
	var animalMasPesadoBajoCero;
	var animalMenosPesado;

	contador=0;
	cantidadDeTemperaturasPares=0;
	animTempMenoresACero=0;
	acumuladorPesoAnimal=0;




	respuesta="si";
	
	while(respuesta=="si")
	{
		contador++;
		nombreAnimal=prompt("Ingrese el nombre del animal");
		while(!isNaN(nombreAnimal))
		{
			nombreAnimal=prompt("Ingrese un nombre del animal valido");
		}

		pesoAnimal=prompt("Ingrese el peso del animal");
		pesoAnimal=parseInt(pesoAnimal);
		acumuladorPesoAnimal+=pesoAnimal;
		while(isNaN(pesoAnimal)||pesoAnimal<1||pesoAnimal>1000)
		{
			pesoAnimal=prompt("Ingrese peso del animal valido");
			pesoAnimal=parseInt(pesoAnimal);
		}

		temperaturaHabitat=prompt("Ingrese la temperatura del habitat");
		temperaturaHabitat=parseInt(temperaturaHabitat);
		while(isNaN(temperaturaHabitat)||temperaturaHabitat<-31||temperaturaHabitat>31)
		{
			temperaturaHabitat=prompt("Ingrese temperatura valida del habitat");
			temperaturaHabitat=parseInt(temperaturaHabitat);
		}

		if(temperaturaHabitat%2==0)
		{
			cantidadDeTemperaturasPares++;
		}

		if(contador==1)
		{
			animalMasPesado=pesoAnimal;
			animalMenosPesado=pesoAnimal;
			temperaturaAnimalMasPesado=temperaturaHabitat;
			nombreAnimalMasPesado=nombreAnimal;
			animalMenosPesadoBajoCero=pesoAnimal;
			animalMasPesadoBajoCero=pesoAnimal;
		}
		else if(pesoAnimal>animalMasPesado)
		{
			animalMasPesado=pesoAnimal;
			temperaturaAnimalMasPesado=temperaturaHabitat;
			nombreAnimalMasPesado=nombreAnimal;
			if(temperaturaHabitat<0)
			{
				animalMasPesadoBajoCero=pesoAnimal;
			}
		}
		else if(pesoAnimal<animalMenosPesado)
		{
			animalMenosPesado=pesoAnimal;
			if(temperaturaHabitat<0)
			{
				animalMenosPesadoBajoCero=pesoAnimal;
			}
		}

		if(temperaturaHabitat<0)
		{
			animTempMenoresACero++;
		}




		respuesta=prompt("¿Desea continuar ingresando animales?");
	}	
	promedio=acumuladorPesoAnimal/contador;
	document.write("Las temperatura pares son "+cantidadDeTemperaturasPares);
	document.write("<br />Las temperatura del animal mas pesado es "+temperaturaAnimalMasPesado+" <br />y su nombre "+nombreAnimalMasPesado);
	document.write("<br /> Animales que viven en temp menos a 0° "+animTempMenoresACero);
	document.write("<br /> Promedio de peso total animales "+promedio);
	document.write("<br /> Animal con habitat bajo cero menos pesado "+animalMenosPesadoBajoCero+"<br /> y mas pesado "+animalMasPesadoBajoCero);



}
