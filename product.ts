//Task4
interface Product{
    name: string;
    price: number;
}
// Create an array of products following the Product interface
const Arr: Product[]=[
    {name : "Mascara", price:70},
    {name : "Lipstick", price:50},
    {name : "Foundation", price:200},];

//Returns the total price of all products

function totalPrice(Arr: Product[]): number {
    let sum = 0;
    Arr.forEach((product) => (sum += product.price));
    return sum;
    }
      
console.log(totalPrice(Arr));

//Task5

// A function that checks if an email address is valid
function checkEmail(email: string): boolean {
    const emailredux = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/;
    return emailredux.test(email);
    }
// Testing the checkEmail function with valid and invalid emails
console.log(checkEmail("username@domain.com"));
console.log(checkEmail("username.domain.com"));



/* 
  To Convert from Typescript to JavaScript:

  at First i use "tsc -init" to edit roodDir and OutDir => dist file
  sourceMap for debugger,
  removeComments,
  noImplicitAny,
  noUnusedLocals,
  noUnusedParameters,
  allowUnreachableCode

  then ==> use code "tsc" to convert to JavaScript file into dist
  then use "node .\dist\product.js" Run the JavaScript code
*/