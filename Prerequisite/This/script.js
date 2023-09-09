
//strict and non strict mode of js
// https://www.geeksforgeeks.org/strict-vs-non-strict-mode-in-javascript/

//1. Bind Function

console.log(this);
function fn(){
    console.log(this)
}
fn();

let obj={
    name:'asd',
    fu:fn
}

obj.fu()