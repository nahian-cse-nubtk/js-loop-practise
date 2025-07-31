//multiplication table

//first we have to add promt-sync library using command:' npm install prompt-sync ' in my project.

//then import promt library for user input

const prompt = require('prompt-sync')();

//// take input from the user

const number = parseInt(prompt('Enter a number :'));


////creating a multiplication table

for(let i = 1; i<=10; i++ )
{
    // multiply i with number

    let result = i * number;

    // display the result

    console.log(`${number} * ${i} = ${result}`);

    // this is called template template literals. to use it we have use backictk(`)


}
