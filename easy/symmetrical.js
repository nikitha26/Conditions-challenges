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