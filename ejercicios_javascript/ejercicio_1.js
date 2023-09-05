//1) se va a ejetutar el array pero con el siguien cambio de 1 a 10 y de 3 a 30

//2)
//const array = ["nombre", "hamburguesa", "papas"];

//function procesarPedido(pedidos) {
// const nombre = pedidos.shift(); //borra la primera posicion del array pasado por parametro y es almacenado dentro de la variable nombre.
//pedidos.unshift("bebida"); //agrega al principio del array ‘bebida’
//pedidos.push(nombre); //agrega al final del array la variable nombre que contiene el nombre que estaba ubicado en la primera posicion del array que le pasamos por parametro
//console.log(pedidos);
//return pedidos; //retorno de la funcion
//}

//3)
//console.log(procesarPedido(array));

//const numero = [1, 2, 3, 4, 5, 6];
//let suma = 0;
//function sumarPares(numeros) {
//  for (let i = 0; i < numeros.length; i++) {
//recorre el array
//    if (numeros[i] % 2 === 0) {
//      // esta es la condocion
//      suma = suma + numeros[i]; // suma guarda los valores de la suma de los numeros que complieron con la condicion
//    }
//  }
//  console.log(suma); //me muestra la suma de la condicion
//}
//sumarPares(numero); //llamo a la funcion usando de parametro mi array
//4)
/*
let palabras = ["computadora", "botella", "celular", "agua"];

function terminanEnA(words) {
  const tieneA = words.every((word) => word.endsWith("a"));
  return tieneA;
}
console.log(terminanEnA(palabras));
*/
//5)

//let numeros = [-1, 5, -3, -9, 7, 4, -8, 2]; // creo el array

//function sortAbsoluteNumbers(numbers) {
//let absolute = [];

//for (let i = 0; i < numbers.length; i++) {
//recorro el array
//let absolute_number = Math.abs(numbers[i]); // abolute_number guarda todo lo que hizo el metodo "math abs" con cada numero de mi array
//absolute.push(absolute_number); // aca despues de crear mi lista vacia que es "absolute" lo que hice fue que los valores que fue cambiando la funcion "math abs" se guarden con push en mi lista vacia
//}
//let resultado = absolute.sort(function (a, b) {
//el absolute.sort ordena de menor a mayor los valores de mi array
//return a - b;
// });
//return resultado;
//}
//console.log(sortAbsoluteNumbers(numeros));

//6)

//const words = [
//  "hola",
//  "tres",
//  "uno",
//  "Universidad",
//  "de",
//  "Buenos",
//  "Aires",
///  "pepito",
//  "celular",
//];
//const posicionpepito = words.indexOf("pepito");
//console.log(posicionpepito); //7
//const palabras = [
//"hola",
//"tres",
//"uno",
/*"Universidad",
  "de",
  "Buenos Aires",
  "pepito",
  "celular",
];
const palabra = "pepito";

function buscaPalabras(words, word) {
  let mayorSiete = [];
  const posicionpepito = words.indexOf(word);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > posicionpepito) {
      mayorSiete.push(words[i]);
    }
  }
  console.log(mayorSiete);
}
buscaPalabras(palabras, palabra);
*/
/*
objetos 1)
function createObject(name, subs) {
  const Objeto = {
    name: name,
    suscribers: subs,
    hash: name.length * subs,
    getStatus: function () {
      return `el canal de ${name} tiene ${subs}`;
    },
  };
  return Objeto;
}

//const persona = createObject("rodrigo", 30).name;
const persona = createObject("rodrigo", 30);
console.log(persona);
*/
//objetos 2)
//1¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que?
//se va imprimir 70 y 180 porque weight tiene el valor de 70 y height el valor de 180
/*
const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { weight = 70, height = 180 } = person;
console.log(weight, height);
*/

/*const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { age: personAge } = person;
console.log(personAge);
no funcionoba porque estaba mal consologueado 
*/
//3) se llama desestructuración

//titulo año Imagen
