// function fact(num){

//     for(i=num;i>=1;)
// }
// fact(4)

// function sayHelloBye(name, num) {
//     var name1 = name.charAt(0).toUpperCase()+name.slice(1)
// 	if(num==1)
// 		{
// 			return `"Hello ${name1}"`;
// 		}
// 	else if(num==0)
// 		{
// 			return `"Bye ${name1}"`;
// 		}
// }
// console.log(sayHelloBye("roy",1));


//Reverse Number
function rev(num){
    var a = num.toString().split('').reverse().join('')
    if(num == a)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(rev(121));


//Given string is palindrome or not check
// function rev(str){
//     var y = str.toLowerCase()
// var x = y.split('').reverse().join('')
// if(x === y)
// {
//     console.log("true");
// }
// else{
//     console.log("false");
// }
// }
// rev("MalaYalam")