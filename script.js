/*Deberas realizar los ejercicios anexados abajo:
1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.*/

//EJERCICIO 1
let nuser=prompt("ingrese un numero: ");
let cont=1;
while (cont<=Number(nuser)) {
    let mult=cont%5;
    if (mult===0) {
        console.log(cont);
        cont++;
    }else{
        cont++;
    }
}
//EJERCICIO 2
nuser=prompt("ingrese un numero entre 1 y 50: ");
let nuser2=prompt("ingrese otro numero entre 1 y 50: ");
cont=1;
while (cont<=50) {
    if (cont===Number(nuser)) {
        console.log("¡Lotería!"+cont)
        cont++;
    }else if (cont===Number(nuser2)) {
        console.log("¡Lotería!"+cont)
        cont++;
    }else{
        console.log(cont)
        cont++;
    }
}
//EJERCICIO 3
const list=[];
nuser=prompt("ingrese un numero (0 para terminar):")
while (parseInt(nuser)!=0) {
    if (isNaN(parseInt(nuser))) {
        alert("Debe ingresar solo numeros");
    }else{
        list.push(nuser);
    }
    nuser=prompt("ingrese un numero (0 para terminar):")
}
console.log(list);
//EJERCICIO 4
let cadena="";
 let letuser=prompt("ingrese una letra (vacio para terminar):")
while (letuser!=="") {
    if (isNaN(parseInt(letuser))) {
        cadena = cadena +" "+ letuser;
    }else{
        alert("Debe ingresar solo palabras o letras");
    }
    letuser=prompt("ingrese una letra (vacio para terminar):")
}
console.log(cadena); 
//EJERCICIO 5