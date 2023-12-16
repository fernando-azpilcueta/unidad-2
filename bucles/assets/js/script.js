
/*

function areaCircunferencia(r){
    const pi = 3.14;
    area = pi*r*r;
    return area    
}

let radio = prompt('Ingresa el valor del radio: ');
resultado = areaCircunferencia(radio);
console.log(resultado); 
*/


/*
//el profesor y las estudiantes.
//utilizar if, else, prompt y console.log
//crear un programa que permita decirnos si aprobamos un curso o no luego de ingresar la nota.
//si una nota mayor a 10 significa que 
//aprobaste un curso de lo contrario recomendar que estudie un poco más.
let nota = prompt("Introduce tu nota: ");
if (nota <= 10) {
        alert("Te recomiendo estudiar un poco más.");
}else if (nota > 10) {
        alert("Aprobaste!");
}
*/




/*
//se usa "valor" para que ellas no crean que deberia de llamarse igual que "nota" al crear la funcion
function estadoEstudiante(valor){
  if (valor <= 10) {
          alert("Te recomiendo estudiar un poco más.");
  }else if (valor > 10) {
          alert("Aprobaste!");
  }
}
let nota = prompt("Introduce tu nota: ");
estadoEstudiante(nota); 
*/

/*

//ya que no existe una nota negativa para un examen en este caso. Lo codificacmos con ellas:
function estadoEstudiante(valor){
  if(valor < 0){
    alert("Debes de ingresar una nota igual o superior a cero.")
  }else{
    if (valor <= 10) {
          alert("Te recomiendo estudiar un poco más.");
    }else if (valor > 10) {
          alert("Aprobaste!");
    }  
  }
}
let nota = prompt("Introduce tu nota: ");
estadoEstudiante(nota); 
*/

//Sumar 2 numeros
function sumar(a,b){
  let resultado = a + b;
  return resultado;
}

let valorSuma = sumar(10,7);
console.log(valorSuma);

function restar(a,b){
  let resultado =  a - b;
  return resultado;
}

//let valorResta = restar(10,15);
//console.log(valorResta);



//CREEN UNA FUNCION, QUE ME IMPRIMA
// LOS NUMEROS DEL 1 AL N

function imprimirNumerosDel1Al(numero){
  let i=1;
  while(i<=numero){
    console.log(i);
    i++;
  }
}

//imprimirNumerosDel1Al(50);


/*Crear la función "verificarPar" QUE VERIFIQUE 
Si un numero es par o no.
(-Si es par retorna 0, si es impar retorna 1)
-El numero se ingresa por parametro)*/

function verificarPar(numero){//Si el numero es PAR retornar 0, sino 1
  if(numero%2==0){
    return 0;
  }
  else{
    return 1;
  }
}


//CREAR UNA FUNCION QUE ME HALLE EL CUADRADO DE UN NUMERO
//Por parametro se pasará un número

function sumar(a,b){
  let resultado = a + b;
  return resultado;
}


//sumar(4,5)

//CREAR UNA FUNCION QUE HALLE UN NUMERO ELEVADO A UNA POTENCIA
//elevar(7,4);
var x = 5


//QUIERO COMPRAR UNA PRENDA, QUE TIENE UN PRECIO Y DESCUENTO.
//HALLAR PRECIO FINAL.

/*for(i=0;i<10;i++){
  for(j=0;j<3;j++){
    console.log(" ");
  }
  for(j=0;j<5;j++){
    console.log("*");
  }
}*/

function f1(n){
  console.log(n)
  n=n/10;
  console.log(n)
  n=n/10;
  console.log(n)
  n=n/10;
  console.log(n)
  n=n/10;
}


//HAY 3 HERMANOS, CADA UNO TIENE UNA EDAD DISTINTA. CREAR
//3 FUNCIONES:
//1. CUÁL ES EL HERMANO MAYOR.
//2. CUAL ES EL HERMANO MENOR.
//3. CUÁL ES EL PROMEDIO DE EDADES.

//Promedio = sumaDeLosNumeros / CantidadDeNumeros

function hermanoMayor(edad1,edad2,edad3){
//codigoooo
alert()
}

let e1 = prompt("Ingrese a edad del hermano 1: ");
let e2 = prompt("Ingrese a edad del hermano 2: ");
let e3 = prompt("Ingrese a edad del hermano 3: ");

hermanoMayor(e1,e2,e3);











function funcionSecreta(N){
  let x=0;
  let i;
  for(i=1;i<=N;i++){
    x=x+i;
  }
  return x;
}








/*

//valor correcto. Realizar el ejercicio con las estudiantes. 
//Aprovechar y que ellas mismas de forma voluntaria comenten la solucion y nosotros codificar segun sus indicaciones. Una posible solución es la siguiente:
//es importante que se combine, funciones, bucles y condicionales para este fin
function estadoEstudiante(valor){      
      if(valor < 0){
      alert("Debes de ingresar una nota igual o superior a cero.")
      }else{
        if (valor <= 10) {
            alert("Te recomiendo estudiar un poco más.");
        }else if (valor > 10) {
            alert("Aprobaste!");
        }  
     }    
}

let nota;
do{
  nota = prompt("Introduce tu nota: ");
  estadoEstudiante(nota);   
}while(nota < 0); //en este while hay un problema, que si lo dejamos vacio sigue trabajando. Podemos agregar otra validacion: || nota == ""
//es decir quedaria (nota < 0 || nota == "")
//preguntar a las estudiantes que más seria bueno validar? si es texto o no, etc. Este proceso es un aspecto muy importante cuando 
//desarrollamos un sitio web.

*/


//para validar si un valor es un número entero.
//Este método devuelve verdadero si el valor es del tipo Número y un entero (un número sin decimales). De lo contrario, devuelve falso.

//res = Number.isInteger(20);
//console.log(res); //saldra true

//let nota = 16; //modificar esto con las estudiantes y que observen que resulta si cambio por un 14.5, "hola", etc. y vean como cambia el mensaje en consola.
//let res = Number.isInteger(nota);
//console.log(res);

//podemos realizar otros ejercicios adicionales

