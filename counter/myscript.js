//<form>
//<div id = "labels" class="labels">
//<label> First Number:<input type = "text" id = "Number1" placeholder = "Number 1"></label>
//<br>
//<label> Second Number: <input type = "text" id = "Number2" placeholder = "Number 2"></label>
//<br>
//<label> Result : <input type = "text" id = "Result" placeholder = "Result"></label>
//<br>
//</div> 
//<div class="operations">    
//<input type = "button" id = "Addition " value = "Add (+)">
//<input type = "button" id = "Subtraction " value = "Substract (-)">
//<input type = "button" id = "Multiply" value = " Multiply (*)">
//<input type = "button" id = "Divide " value = "Divide (/)">

window.onload=function (){
const Number1 = document.querySelector('#Number1')
const Number2 = document.querySelector('#Number2')
const Result = document.querySelector('#Result')
const Addition = document.querySelector ('#Addition')
const Substraction = document.querySelector ('#Substraction')
const Multiplication= document.querySelector ('#Multiply')
const Division= document.querySelector ('#Divide')


Addition.addEventListener("click", function(){
    Result.value=(Number(Number1.value)+ Number(Number2.value))
    })
Substraction.addEventListener("click", function(){
        Result.value=(Number(Number1.value) - Number(Number2.value))
        })
Multiplication.addEventListener("click", function(){
        Result.value=(Number(Number1.value) * Number(Number2.value))
        })
Division.addEventListener("click", function(){
        Result.value=(Number(Number1.value) / Number(Number2.value))
            })
}