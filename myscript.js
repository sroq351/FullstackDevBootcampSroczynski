function basicAdd(a,b) {
    return a + b
}

const newAdd = (a,b) =>  a +b

const addAndPrint = (a, b)=> {
    let ret = a+b
    console.log ("add and print", ret)
    return ret
}
window.onload = function (){
console.log (basicAdd (2,2))

console.log ("New add:" +newAdd(2,2))
addAndPrint(2,2);
}

let array = [1,2,3,4]
array.forEach(element => {
    console.log(element)
})