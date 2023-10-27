// 2.	Conditional Statements: Create a program that checks if a user's age is greater than or 
// equal to 18 and displays "You are an adult" or "You are a minor" accordingly.

function CheckAge(age){
    if(age>18){
        console.log("You are an adult");
    }
    else{
        console.log("You are a minor");
    }
}
CheckAge(19);