function boomIntensity(n) {
    var first = "o";
    if(n<2)
    {
        var one = first.repeat(2)
        return "b"+one+"m";
    }
    else if(n%2==0&&n%5==0)
    {
        var both = first.repeat(n).toUpperCase();
        return "B"+both+"M!";
    }
    else if(n%2==0)
    {
        var two = first.repeat(n)
        return "B"+two+"m!";
    }
    else if(n%5==0)
    {
        var three = first.repeat(n).toUpperCase();
        return "B"+three+"M";
    }
    
}
var output = boomIntensity(20);
console.log('"'+output+'"')