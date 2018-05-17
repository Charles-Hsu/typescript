// Declare a tuple type
let x: [string, number];
x = ["hello", 10]; // OK

console.log(x[0].substr(1)); // OK
console.log(x[1]); // Error, 'number' does not have 'substr'

x[3] = "world";
console.log(x[0].toString()); // OK, 'string' and 'number' both have 'toString'
console.log(x[1].toString()); // OK, 'string' and 'number' both have 'toString'
x[6] = true;