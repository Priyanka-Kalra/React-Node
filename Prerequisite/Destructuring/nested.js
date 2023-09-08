let obj = {
    name: "Priyanka",
    surname:"Kalra",
    add: {
        country: "India",
        state: {
            code: "011",
            pin: "110018"
        }
    }
}
let {surname:s}=obj;
console.log(s)

let {add:{country:c}}=obj
console.log(c)