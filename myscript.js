//numeric - zmienne liczbowe 
let length= 180
console.log(length)
let weight = 85.5
console.log(weight)

//strings - zmienne tekstowe 

let color= "Yellow"
console.log (color)

//boolean - true/false

let x = true
console.log(x)
let y= false
console.log(y)

//object

let person = {firstName:"Michal", lastName: "Sroczynski"}
    console.log (person)

//Array

let cars = ["Saab", "Volvo", "BMW"]
console.log(cars)

//Date

const date = new Date ("2024-08-31")
console.log(date)


//equal 

console.log ( "wynik porownaia: " + (length==weight))

//equal value and equal type
let lenght2 = 180.0
console.log (length===lenght2)

//not equal 
console.log (100 !=150)

//not equal value and not  equal type

console.log (100 !== "100")

//greater

console.log (100>99)

//less

console.log(99<100)

//greater or equal

console.log (100 >=100)

//less or equal

console.log (100<=99)

//ternary operator

let result = 100 > 101 ? "Tak" : "Nie"

console.log (result)

// loops w onenocie 



//for each
cars.forEach (function(element){
    console.log (element)
})




//IF else (+AND)
let temperature = 41
if(temperature>= 36. && temperature<37) {
    console.log ("W normie")
}else if (temperature>=37 && temperature< 38){
    console.log ("Stan podgoraczkowy")
}else if (temperature>=38 && temperature<40) {
    console.log("goraczka")
}else{
    console.log("Blad pomiaru")
}
//or 
let money =25
let voucher = true

if (money> 20 || voucher== true) {
    console.log("Mozesz isc na film")
}

//not

if (!15>20){
    console.log ("NOT")

}

funciton