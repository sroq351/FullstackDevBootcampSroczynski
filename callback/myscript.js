function myDisplayer (text){
    alert(text)
}

function myCalculator (num1, num2, myCallback){
    let sum = num1 +num2
myCallback (sum)
}

myCalculator  (5,5, myDisplayer)