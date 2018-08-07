function mostrar()
{
	/*mostrar * en un solo alert * el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".*/

	var nombre;
	var localidad;

	nombre=prompt("Ingrese su nombre");
	localidad=prompt("ingrese su localidad");

	document.getElementById('elNombre').value=nombre;
	document.getElementById('laLocalidad').value=localidad;

}
