//The continue statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop.

//The difference between continue and the break statement, is instead of "jumping out" of a loop, the continue statement "jumps over" one iteration in the loop.



for(let i=0; i<=10; i++)
{
    if(i%2===1)
    {
        continue;
    }
    console.log(i);
}

console.log('without continue')
for(let i=0; i<=10; i++)
{
    if(i%2===1)
    {
      console.log(i);
    }

}
console.log('using break');

for(let i=0; i<=10; i++)
{
    console.log(i);
    if(i%2===1)
    {
        break;
    }
}
//this case is differnt from other
console.log('continue statement in while');

let n =0;

while(n<=50)
{
    if(n%5!==0)
    {
        n++;
        continue;
    }
    console.log('the number is divisable by 5: ', n);
    n++;
}

