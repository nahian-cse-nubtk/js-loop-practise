// do while

//The do...while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

//difference between while and do while below

//while: Condition is checked first then statement(s) is executed.

//do-while: Statement(s) is executed atleast once, thereafter condition is checked.

// let see first while then let see do

let i = 0;

while(i<5)
{
    console.log(i);
    i++;
    //sometimes we forget to give i++ statement. at that time the loop will be infinite.
}

console.log('do-while');

let n =0;

do{
    console.log(n);
    n++;
}
while(n<5)

console.log('another do-while loop example');

let n1=2;

do{
    console.log(n1);
    n1++;
}
while(n1<20)