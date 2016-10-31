//DOM como el browser lee la pagina
document.body.style.color = 'red';

//Se esta cambiando la imagen
var cage = document.getElementById('cage');
cage.src = "http://placecage.com/100/100";

//modificar una lista
var lis = document.getElementById('lista');
console.log(lis.childElementCount);

lis.children[0].innerHTML = "tacos";



//Funcion activada por un evento en la pagina
var add = function() {
    document.write(2+2);
}

//Moverse por el DOM
console.log(document.getElementById("lastElement").previousSibling);//Nodo Vacio

console.log(document.getElementById("lastElement").previousSibling.previousSibling);

console.log(document.getElementById("lastElement").parentNode);