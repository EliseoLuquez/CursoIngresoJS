
 function mostrar()
{

	var contador=0;//variable+ constante
	var acumulador=0;//variable + variable
	var numero;

	while(contador<5){
		numero=prompt("Ingrese un numero");//si ingresa una lentre en vez de un numero numero = Nan
		numero=parseInt(numero);
		contador++;
		/*while(isnan(numero)){ (VALIDA QUE SEA UN NUMERO)
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);
			}*/
		}
		acumulador+=numero;//hay que ponerlo en el bucle para no repetir todo...por eso esta acumulador!!
						   //el acumulador es variable mas variable y guarda el resultado anterior!! cuando dice sumar es acumular en una variable los numeros!!
						   //es igual que poner suma=suma + numero!!
		

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN