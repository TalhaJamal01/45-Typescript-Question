let x:number = 10
let y:number = 5
let bike:string = "Talha"
let str1:string = "Hello"
let str2:string = "World"

//Test that evalute True -->
console.log("Is car == Talha? I predict True");
console.log(bike == "Talha");

console.log("Is x not equal to y? I predict True.");
console.log(x != y);

console.log("Is x greater than y? I predict True.");
console.log(x > y);

console.log("Is str1 == Hello? I predict True");
console.log(str1 == "Hello");

console.log("Is str1 length is equal to 5? I predict True");
console.log(str1.length == 5);

// Test that evaluted False -->
console.log("Is str1 length is greater than 5? I predict False");
console.log(str1.length > 5);

console.log("Is x equal to y? I predict False.");
console.log(x == y);

console.log("Is x is less than y? I predict False");
console.log(x < y);

console.log("Is x + y is equal to 20? I predict False");
console.log(x + y == 20);

console.log("Is str1 concatenated  with str2 equal to Helloword? I predict False ");
console.log(str1 + str2 == "Helloword");
