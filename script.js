console.log("hello world")

function cube(number){
    return number*number*number
//    console.log(number*number*number)
};

console.log(cube(4));

var num = cube(5);
console.log(num);

function enterCafe(Age){
    if (Age < 18){
        return `You cannot enter the cafe`;
    }
    return `You can enter the cafe`;
};

var age = enterCafe(21);
console.log(age);


function subtraction(x, y){
    return x-y;
}

console.log(subtraction(7,4));

const myFunction = new Function("a","b", "return a + b");

console.log(myFunction(2,3));

function isOdd(num){
if( num % 2 ==0){
    return "isOdd"
};
    return "even Number";
};
console.log(isOdd(5));