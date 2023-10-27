// 10.	Nested Loops: Write a program that prints a multiplication table for numbers from 1 to 5.
function printMultiplicationTable() {
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 10; j++) {
            const result = i * j;
            console.log(`${i} * ${j} = ${result}`);
        }
    }
}

printMultiplicationTable();
