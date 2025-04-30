function printVariables(value1,value2,value3){
    var localVar=3; 
     testingVar = 5;

    if(arguments.length > 3){
        let arr1=[];
        for(arg of arguments){
            arr1.push(arg);
        }
        return arr1;
    }
    return [value1,value2,value3];
}

printVariables(5,4,3);

console.log(testingVar); 

var functionexpression = (value1,value2,value3) =>{
    var localVar2=3; 
    testingVar2 = 5;
    return [value1,value2,value3];
}
console.log(functionexpression(5,6,7)); 
console.log(testingVar2); 



function sum (x = 1, y = 1){
    if(isNaN(x) || isNaN(y)){
        return "this is not a number";
    }
    return x + y;
}
console.log(sum(10,30));
console.log(sum("abc")); 
