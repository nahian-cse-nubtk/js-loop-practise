//odd and even number find i=i+2

for(let n = 0; n<=10; n+=2)
{
    console.log(n);
}
console.log('odd usnig for')
for(let n1 = 1; n1<=10; n1+=2)
{
    console.log(n1);
}
console.log('using while loop')
let n2 = 0;
while(n2<=10)
{
    console.log(n2);
    n2+=2;
}
//using while loop odd

console.log('using while loop odd');
let n3 = 1;
while(n3<=10)
{
    console.log(n3);
    n3+=2;
}

// now we will see it in different format

console.log('find odd using differnt system equal 1')

for(let n4 = 0; n4<=10; n4++)
{
    if(n4%2===1)
    {
        console.log('the numver is odd', n4);
    }
    else
    {
        console.log('the number is even', n4);
    }
}
//using  find odd

console.log('find even number using not equal 0');
for(let n5 =0; n5<=10; n5++)
{
    if(n5%2 !==0)
    {
        console.log('the numver is odd', n5);
    }
    else
    {
        console.log('the number is even', n5);
    }
}
console.log('find even number using not equal 1');
for(let n6 =0; n6<=10; n6++)
{
    if(n6%2 !==1)
    {
        console.log('the numver is even', n6);
    }
    else
    {
        console.log('the number is odd', n6);
    }
}


//divisable by 5

console.log('divisable by 5 using mod');

for( let i = 1; i<=20; i++)
{
    if(i%5===0)
    {
        console.log('divisable by 5 : ', i);
    }
    else
    {
        console.log('not divisable by 5:  ' , i);
    }
}
console.log('divisable by 5 using mod and their sum');
let sum1 = 0;

for( let n7 = 1; n7<=20; n7++)
{
    if(n7%5===0)
    {
        sum1+=n7;


    }


}
console.log(sum1);