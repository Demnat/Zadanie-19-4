// Zadanie 1
const hello = 'Hello';
const world = 'World';
console.log(`Zadanie 1: ${hello} ${world}`);

// Zadanie 2
const multiply = (x = 1, y = 1) => {
    return x * y;
};
console.log(`Zadanie 2: Wynik mnożenia: ${multiply(2)}`);

// Zadanie 3
const average = (...args) => {
                let argSum = 0;
                args.forEach(arg => { argSum += arg; });
                return argSum / args.length;
            };
console.log(`Zadanie 3: średnia arytmetyczna: ${average(2,5,6,2,4,8,5)}`);

// Zadanie 4 
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(`Zadanie 4: średnia arytmetyczna tablicy: ${average(...grades)}`);

// Zadanie 5 
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [,,firstName,,lastName] = data;
console.log(`Zadanie 4: firstName: ${firstName} , lastName: ${lastName}`);

