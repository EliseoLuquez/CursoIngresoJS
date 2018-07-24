/*4. Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A. Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B. Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C. Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
  var precioBruto;
  var precioFinal;
  var precio;
  var marca;
  var precioConDescuento;
  var cantidad;
  var descuento;
  var iibb;
  var precioIibb;
  marca = document.getElementById('Marca').value;
  cantidad = document.getElementById('Cantidad').value;
  precioConDescuento = parseInt(precioConDescuento);
  cantidad = parseInt(cantidad);
  precioFinal = parseInt(precioFinal);
  precioBruto = parseInt(precioBruto);
  precio = parseInt(precio);
  descuento = parseInt(descuento); 
  iibb = parseInt(iibb);
  precioIibb = parseInt(precioIibb);
  precio = 35;
  iibb = 0.1;
  descuento = 1;
  precioBruto = precio*cantidad;
  //Hacer pruebas de escritorio
  switch(cantidad){ 
        case 1:
              precioFinal;
              break;
  switch(marca){
        case 2:
              "ArgentinaLuz";  
              descuento=0.85;
              break;
      
  }            







  }
  precioFinal=precioBruto*descuento;
  document.getElementById('precioDescuento').value = precioFinal;
  











  /*
  if(cantidad==6) //A. Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
  {
    precio = cantidad*precioUnitario;
    descuento = 0.5;
    precioDescuento = precio*descuento;
    document.getElementById('precioDescuento').value = precioDescuento;
  } else 
  if(cantidad>6)
  {
    precio = cantidad*precioUnitario;
    descuento = 0.5;
    precioDescuento = precio*descuento;
    precioIibb = precioDescuento*iibb;
    document.getElementById('precioDescuento').value = precioDescuento;
    alert("Usted pago " +precioIibb+" de ingresos brutos");    
  } else if(cantidad==5&&lamparas=="ArgentinaLuz")//B. Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
  {
    precio = cantidad*precioUnitario;
    descuento = 0.6;
    precioDescuento = precio*descuento;
    document.getElementById('precioDescuento').value = precioDescuento;
  } else if(cantidad==5&&lamparas!="ArgentinaLuz"|| precioDescuento>=120)//y si es de otra marca el descuento es del 30%. 
  {
    precio = cantidad*precioUnitario;
    descuento = 0.7;
    precioDescuento = precio*descuento;
    document.getElementById('precioDescuento').value = precioDescuento;
    precioIibb = precioDescuento*iibb;
    alert("Usted pago " +precioIibb+" de ingresos brutos"); 
  } else if(cantidad==4&&lamparas=="ArgentinaLuz"||cantidad==4&&lamparas=="FelipeLamparas")
  {
    precio = cantidad*precioUnitario;
    descuento = 0.75;
    precioDescuento = precio*descuento;
    document.getElementById('precioDescuento').value = precioDescuento;
  } else if(cantidad==4&&lamparas=="JeLuz"||cantidad==4&&lamparas=="Osram"||cantidad==4&&lamparas=="HazIluminacion")//y si es de otra marca el descuento es del 20%.
  {
    precio = cantidad*precioUnitario;
    descuento = 0.8;
    precioDescuento = precio*descuento;
    document.getElementById('precioDescuento').value = precioDescuento;
  } else if(cantidad==3&&lamparas=="JeLuz"||cantidad==3&&lamparas=="HazIluminacion"||cantidad==3&&lamparas=="Osram")//D.Si compra 3  lamparitas, si es de otra marca un 5%.
  {
    precio = cantidad*precioUnitario;
    descuento = 0.95;
    precioDescuento = precio*descuento;
    document.getElementById('precioDescuento').value = precioDescuento;
  } else if(cantidad==3&&lamparas=="FelipeLamparas")//si es  “FelipeLamparas” se hace un descuento del 10 %
  {
    precio = cantidad*precioUnitario;
    descuento = 0.9;
    precioDescuento = precio*descuento;
    document.getElementById('precioDescuento').value = precioDescuento;
  } else if(cantidad==3&&lamparas=="ArgentinaLuz") //Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15% 
  {
    precio = cantidad*precioUnitario;
    descuento = 0.85;
    precioDescuento = precio*descuento;
    document.getElementById('precioDescuento').value = precioDescuento;
  } 
  */
  
}