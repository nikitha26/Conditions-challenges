// switch(1){
//     case 1:
//        var x = "Hai this case 1";
//        console.log(x);
//         break;
//     case 2:
//         var y = "Hai this case2";
//         console.log(y)
//         break ;
//     default:
//         var z = "Hai this default";   
//         console.log(z) 
// }


//for of loop
// var name = "john";
// var x;
// for(x of name){
// console.log(x);
// }


//for in loop
// var check = "" ;
// var name = {
//     fname:"jo ",
//     lname:"john ",
//     age:34 
// }
// var x;
// for(x in name){
//     check +=name[x];
   
// }
// console.log(check);

//while loop
// var update = "";
// var i = 0;
// while(i<5)
// {
//     i++;
//     update +=i
// }
// console.log(update)
// var update = " ";
// var i = 1;
// do{
//     i++;
//     update +=i;
// }
// while(i<4)
// console.log(update)



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
