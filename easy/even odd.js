//Given number is even or odd 
var arr = [2,3,4,5]
var even = 0;
var odd = 0;
for(i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
       even++;
    }
    else
    {
        odd++;
    }
}
console.log(`${even} even and ${odd} odd numbers`)
