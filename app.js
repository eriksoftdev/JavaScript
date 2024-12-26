document.write("<h1>Hello World!</h1> ");

let x = false;

if (x) {
  console.log("x is true");
} else {
  console.error("x is not true");
}

//Tipos de datos

//String

let name = '<b style = "color: green;">Erik</b>';
document.write(
  name + " esta en una variable " + " y es de tipo: " + typeof name
);

document.write("<h2>Recorriendo una lista con for</h2>");

let lista = ["Martha", "Erik", "Alberto del Rio"];

for (let i = 0; i < lista.length; i++) {
  const element = lista[i];
  document.write("<li>" + element + "</li>");
}

document.write("<h2>Objetos</h2>");

let objetoUser = {
  name: "Erik",
  lastname: "Perez",
  age: 27,
  isActive: true,
  friends: ["Martha", "Alberto del Rio"],
};

document.write("<h3>Datos del objeto</h3>");
document.write(`{<br> <i>name</i>: '${objetoUser.name}',`);
document.write(`<br> <i>lastname</i>: '${objetoUser.lastname}',`);
document.write(`<br> <i>age</i>: ${objetoUser.age},`);
document.write(`<br> <i>isActive</i>: ${objetoUser.isActive}`);
document.write(`<br> <i>friends</i>: [${objetoUser.friends}]`);
document.write("<br>}");

document.write("<h3>Uso de comillas dobles o backticks</h3>");

document.write(`<p>Las <b>Backticks</b> (&#96 &#96), tambien conocidas como <b>comillas invertidas</b> son una forma
    poderosa y flexible de manejar cadenas en JavaScript, facilitando la <b>interpolacion de variables</b>, la creacion de cadenas
    multilinea y la inclusion de expresiones complejas. </p>`);





//declaramos una variable que va a crear un elemento div con la propiedad createElement
const div = document.createElement("div");
//Con la propiedad .id le asignamos un id
div.id = "text1";

//Agregamos un EventListener para asegurarnos que se ha cargado el DOM para que podamos acceder al elemento creado

document.addEventListener("DOMContentLoaded", function () {

  //asigna a una variable el acceso al elemento div1
  let text1 = document.getElementById("div1");
  //anade un texto al div con textContent
  text1.textContent = "Hola soy un texto";

});



//Entrada de usuario con prompt()  

function showMessage() {
  
  let nombreDeUsuario = prompt("Ingresa un nombre de usuario");
  document.getElementById('userName').textContent = 'Hola ' + nombreDeUsuario;
  }




//Operaciones aritmeticas

//Suma
let a = 10;
let b = 5;

let c = a + b;

if (c == 15) console.log("c es igual a 15");

//Concatenacion

let username = "Cyborg";
let greeting = "Welcome " + username;

//Comparaciones

let x1 = 10;
let y = 20;

let result = x1 - y;

let falseOrTrue = result < 0;
console.log(falseOrTrue);

if (result < 0) {
  console.log(
    "x1 es menor que y por lo tanto la condicional es: " + falseOrTrue
  );
}

if (result < -12) {
  console.log(result);
} else if (result > -11) {
  console.log(`${result} es mayor que -11`);
} else {
  console.log(`${result} es igual a -11`);
}

//Switch case

let typeCard = "Credit Card";

switch (typeCard) {
  case "Debit Card":
    console.log("Debit Card");
    break;

  case "Credit Card":
    console.log("Credit Card");
    break;

  default:
    console.log("Card type not found");
    break;
}

let listForWhile = [];

//While loop
let count = 50;

while (count > 0) {
  listForWhile.push(count);
  count--;
}

console.log(listForWhile);

while (count < 50) {
  listForWhile.push(count);
  count++;
}

console.log(listForWhile.length);

let friendsList = ["Joe", "Martin", "Juan", "Jose", "Jhon"];

for (let i = 0; i < friendsList.length; i++) {
  const element = friendsList[i];
  console.log("Hola " + element);
}


//Funciones 

function miFuncion(){
    console.log('Hello World from a function');
}

miFuncion(); 

console.log('Cambio')