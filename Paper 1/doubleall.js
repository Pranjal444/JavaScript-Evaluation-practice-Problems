// Higher-Order Functions: Create a program that uses the map function to double each element in 
// an array of numbers.
function doubleAll(a){
    const doubleno=a.map((i)=>i**2);
    return doubleno;
}
console.log(doubleAll([6]));