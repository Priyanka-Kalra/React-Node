let arr=['apple','banana','kiwi','strawberry','mango']

let narr=arr.filter((value)=>{

    return value.length>=6;
})
console.log(arr);
console.log(narr);