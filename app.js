document.write('<h1>Hello World!</h1> ');

let x = false;

if (x) {
    console.log('x is true');
}
else {
    console.error('x is not true');
}


//Tipos de datos 

//String

let name = '<b style = "color: green;">Erik</b>';
document.write( name + ' esta en una variable ' +' y es de tipo: ' + typeof name);





document.write('<h2>Recorriendo una lista con for</h2>');


let lista = ['Martha', 'Erik', 'Alberto del Rio'];

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    document.write('<li>' + element + '</li>');
}



document.write('<h2>Objetos</h2>');

let objetoUser = {
    name: 'Erik', 
    lastname: 'Perez',
    age: 27,
    isActive: true,
    friends: ['Martha', 'Alberto del Rio'],
}

  
document.write('<h3>Datos del objeto</h3>');
document.write(`{<br> <i>name</i>: '${objetoUser.name}',`);
document.write(`<br> <i>lastname</i>: '${objetoUser.lastname}',`);
document.write(`<br> <i>age</i>: ${objetoUser.age},`);
document.write(`<br> <i>isActive</i>: ${objetoUser.isActive}`);
document.write(`<br> <i>friends</i>: [${objetoUser.friends}]`);
document.write('<br>}')

document.write('<h3>Uso de comillas dobles o backticks</h3>');

document.write(`<p>Las <b>Backticks</b> (&#96 &#96), tambien conocidas como <b>comillas invertidas</b> son una forma
    poderosa y flexible de manejar cadenas en JavaScript, facilitando la <b>interpolacion de variables</b>, la creacion de cadenas
    multilinea y la inclusion de expresiones complejas. </p>`)



//declaramos una variable que va a crear un elemento div con la propiedad createElement
const div = document.createElement('div');
//Con la propiedad .id le asignamos un id 
div.id = 'text1';



//Agregamos un EventListener para asegurarnos que se ha cargado el DOM para que podamos acceder al elemento creado 
//para depues añadirle un texto con la propiedad .textContent

document.addEventListener("DOMContentLoaded", function(){
    let text1 =document.getElementById('div1');
    text1.textContent = 'Hola soy un texto';
}
);




//Operaciones aritmeticas




//Suma
let a = 10;
let b = 5;

let c = a + b;
document.write(c);


//Concatenacion 

let username = 'Cyborg';
let greeting = 'Welcome ' +  username;


//Comparaciones

let x1 = 10; 
let y = 20;


const crearDiv = document.createElement('div');
div.id = 'operations';

