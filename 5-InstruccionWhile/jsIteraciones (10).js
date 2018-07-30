
/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 
7-Promedio de positivos. 8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/



function  mostrar ()
{
	var contador;
	// declarar contadores y variables
	var numero;
	var positivo;//contador de positivos
	var negativo;//contador de negativos
	var contadorPositivos;
	var contadorNegativos;
	var respuesta;
	var ceros;
	var numerosPares;//numero%2=0 es par
	var promedioPositivos;
	var promedioNegativos;
	var mensaje;

	contador=0;
	positivo=0;
	negativo=0;
	contadorPositivos=0;
	ceros=0;
	contadorNegativos=0;
	numerosPares=0;
	respuesta="si";

	while (respuesta!="no"){
			contador++;
			numero=prompt("Ingrese numero "+contador);
			numero=parseInt(numero);
	//switch(contador){
			//case 1:
					if(numero<0)
					{
						negativo+=numero;
						contadorNegativos++;
					}
					else if(numero==0)
					{
						ceros++;
					}
					else
					{
						positivo+=numero;
						contadorPositivos++;
					}
					//break;
			//default:
					/*if(numero<0)
					{
						negativo+=numero;
						contadorNegativos++;
					}
					else if(numero==0)
					{
						ceros++;
						
					}else
					{
						positivo+=numero;
						contadorPositivos++;
					}
					//break;*/

	//}
	respuesta=prompt("¿Desea continuar?");	
	
	if(numero%2==0)
	{
		numerosPares++;
	}
	if(contadorPositivos>contadorNegativos)
	{
		mensaje="Hay "+(contadorPositivos-contadorNegativos)+" positivos mas que negativos";
	}
	else if(contadorNegativos>contadorPositivos)
	{
		mensaje="Hay "+(contadorNegativos-contadorPositivos)+" negativos mas que positivos";
	}
	else
	{
		mensaje="Hay la misma cantidad de positivos y negativos";
	}
	}
	promedioNegativos=negativo/contadorNegativos;
	promedioPositivos=positivo/contadorPositivos;
	document.write("Suma de negativos: "+negativo+"<br />suma positivos: "+positivo+"<br />cantidad negativos:"+contadorNegativos+"<br />cantidad positivos: "+contadorPositivos+"<br />canitdad ceros: "+ceros+"<br />cantidad pares: "+numerosPares+"<br />promedio negativos: "+promedioNegativos+"<br />promedio positivos: "+promedioPositivos+"<br />diferencia positivos negativos: "+mensaje);




} // FIN DE LA FUNCIÓN
