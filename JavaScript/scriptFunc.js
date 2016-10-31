//Square
/*
var square = function(x) {
    return x * x
};
var num = prompt("rola un numero para squerearlo");

console.log(square(num));
*/

//Power Forma 1
var power = function (base, exponent) {
    var resp = 1;
    for(var i = 0; i < exponent; i++){
        resp *= base;
    }
    return resp;
};
console.log(power(2,128));

//Power F2
/*
function power(base, exponent) {
    var resp = 1;
    for(var i = 0; i < exponent; i++){
        resp *= base;
    }
    return resp;
}

*/