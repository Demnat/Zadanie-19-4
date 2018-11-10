'use strict';

// Zadanie 1
var hello = 'Hello';
var world = 'World';
console.log('Zadanie 1: ' + hello + ' ' + world);

// Zadanie 2
var multiply = function multiply() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return x * y;
};
console.log('Zadanie 2: Wynik mno\u017Cenia: ' + multiply(2));

// Zadanie 3
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var argSum = 0;
    args.forEach(function (arg) {
        argSum += arg;
    });
    return argSum / args.length;
};
console.log('Zadanie 3: \u015Brednia arytmetyczna: ' + average(2, 5, 6, 2, 4, 8, 5));

// Zadanie 4 
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log('Zadanie 4: \u015Brednia arytmetyczna tablicy: ' + average.apply(undefined, grades));

// Zadanie 5 
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];

console.log('Zadanie 4: firstName: ' + firstName + ' , lastName: ' + lastName);
