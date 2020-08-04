//Sum of odd numbers 
// function odd(n){
//     var odd = 0;
// for(i=0;i<=n;i++)
// {
//     if(i%2==1)
//     {
//         odd +=i;
//     }
// }
// console.log(odd)
// }
// odd(3)

//Check given input is 1 return true and input is 0 return false in array format.
// function check(n){
//   var str = n.split('');
//   var check = str.map(fun1)
//   function fun1(x){
//    if(x==1){
//        return true;
//    }
//    else if(x==0)
//    {
//        return false;
//    }
//   }
//   console.log(check);
// }
// check("110")


// add the array of items to array of index numbers.
// function add(arr){
// for(i=0;i<arr.length;i++){
// console.log(arr[i]+i)
// }
// }
// add([3,7,10,20])

// add the array of items to array of index numbers using map method.
// function fun2(arr){
//   var first = arr.map(check)
//   function check(x,index)
//   {
//     return x+index ;
//   }
//   console.log(first)
// }
// fun2([3,7,10,20])

//Print hypens corresponding number ranging from 1 to 60
// function hypen(n){
//   var hy = "-";
//   var first =hy.repeat(n);
//   console.log('"'+first+'"')
// }
// hypen(2)

//Summing of squre numbers
// function sum(num){
//   var add = 0;
// for(i=num;i>=1;i--)
// {
//   var squr = Math.pow(i,2);
//   add +=squr;
// }
// console.log(add)
// }
// sum(4)
// function fun1(n){
// var arr = n.sort(function(a,b){
//    return a-b;
// });
//  console.log(arr[arr.length-1]);
// }
// fun1([2,6,10,3,5,12,1])


//Multiply by length
// function fun1(arr){
//   var len = arr.length;
//  var mul = arr.map(fun2);
//  function fun2(x){
//    return x*len;
//  }
//   console.log(mul)
// }
// fun1([2,3,4,5])


//Choose numbers in array using filter method.
// function fun1(arr){
//   var check = arr.filter(check1);
//   function check1(x){
//     var num = Number.isInteger(x);
//     return num;
//   }  
//     console.log(check)
// }
// fun1([3,5,'a',7,'b'])


// function howManyTimes(num) {
// 	var str = "a";
// 	var result = str.repeat(num);
// 	return "Ed"+result+"bit";
// }
// console.log(howManyTimes(4))

// function addEnding(arr, ending) {
//     var result = arr.map(fun1)
//     function fun1(x)
//     {
//        var final = x+""+ending;
//        return final;
//     }
//     console.log(result)
    
// }
// addEnding(["nice","beautif","honest"],"ly")

// function checkPalindrome(str) {
// 	var one = str.split('').reverse().join('');
// 	if(str==one)
// 		{
// 			return true;
// 		}
// 	else
// 		{
// 			return false;
// 		}
// }
// console.log(checkPalindrome("malayalam"));


//Greetings to guests..
// function greetPeople(names) {
// 	var result = names.map(fun1)
// 	function fun1(x)
// 	{
// 		return "Hello"+" "+x;
//     }
//     var final = result.join(', ')
//     console.log(final)
// }
// greetPeople(['john','roy'])

//Factorial of given number..
function fun1(n){
	var result = 1;
for(i=n;i>=1;i--)
{
	
   result *=i;
}
console.log(result)
}
fun1(3)