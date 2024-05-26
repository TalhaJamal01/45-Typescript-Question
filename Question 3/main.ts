// Talha 14/3/2023
// It is a code to print a person name in lowercase, uppercase and titlecase.

let person_name:string = "Muhammad Talha Jamal";

console.log(`LowerCase: ${person_name.toLowerCase()}`);

console.log(`UpperCase: ${person_name.toUpperCase()}`);

console.log(`Titlecase: ${person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase()}`);
