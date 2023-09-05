let obj= {
    name: "Priyanka",
    add:{
        country: "India",
        state :{
            code: "011",
            pin: "110018"
        }
    }
}
//1
//let obj2=obj

//2
//let obj2 = { ...obj, add: { ...obj.add, state: { ...obj.add.state } } }

//3
let obj2=JSON.parse(JSON.stringify(obj))
obj2.name="Guddu"
obj2.add.country="Russia"
obj2.add.state.code="012"

console.log(obj)
console.log(obj2)