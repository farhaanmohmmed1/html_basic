let a = Number(prompt("enter frist number:"));
let b = Number(prompt("enter  second number:"));
let op = Number(prompt("enter 1 -add, 2-sub, 3-mul, 4-div, 5-exp:"))

if (Math.random()<0.1)
faultycalcy(a,b,op)
else
calcy(a,b,op)


function calcy(a, b, op) {
    if (op === 1) {
        console.log(a + b);
    }
    if (op === 2) {
        console.log(a - b);
    }
    if (op === 3) {
        console.log(a * b);
    }
    if (op === 4) {
        console.log(a / b);  }
    if (op === 5) {
        console.log(a ** b);
    }
}
function faultycalcy(a, b, op) {
    if (op === 4) {
        console.log(a + b);
    }
    if (op === 1) {
        console.log(a - b);
    }
    if (op === 5) {
        console.log(a * b);
    }
    if (op === 2) {
        console.log(a / b); }
    if (op === 3) {
        console.log(a ** b);
    }
}