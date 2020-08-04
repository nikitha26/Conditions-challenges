//Check the condition below
// function fun1(arr1,arr2){
//   if(arr1[0]==arr2[0]&&arr1[arr1.length-1]==arr2[arr2.length-1])
//   {
//       console.log(true)
//   }
//   else{
//       console.log(false)
//   }
// }
// fun1(["whitebread","chese","whitebread"],["whitebread","tomoto","whitebread"])


//largest number in group of arrays..
// function check(x,y,z){
//  var first = x.sort(function(a,b){
//      return a-b;
//  })
 
//  var second = y.sort(function(a,b){
//      return a-b;
//  })
  
//  var third = z.sort(function(a,b){
//      return a-b;
//  })
//  return first[first.length-1]+","+ second[second.length-1]+","+ third[third.length-1];
// }
// var final = check([4,72,9],[10,2,5],[15,20,5])
// var almost = final.split();
// console.log(almost)


function fun1(x){
  var result = x.includes("a")
  console.log(result)
}
fun1("apple")