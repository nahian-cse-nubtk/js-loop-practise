// const number = 7;

// if(number>10)
// {
//     console.log('the number is less than 10');
// }

// console.log('nahian');

//while

let number =0;
while(number<5)
{
    console.log('hello ', number);
    number =number +1;
}

let num = 5;
while(num>=1)
{
    console.log('decrement ', num);
    num = num - 1;
}

// sum of the numbers

let num1 = 1;
let sum = 0;
while(num1<=10)
{
    console.log(num1);
    sum = sum + num1;
    console.log('every sum = ', sum);
    num1++;


}

console.log('sum =',sum);

//even number findout using while

let num2 = 1;
while(num2<=10)
{
    if(num2 % 2 === 0)
    {
        console.log('the number is even and that is : ', num2);
    }
    else
    {
        console.log('the number is odd and that is : ', num2);
    }
    num2++;
}
