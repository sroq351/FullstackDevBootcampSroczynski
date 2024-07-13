window.onload =function(){
const button = document.querySelector('#actionButton')
const inputBox = document.querySelector ('#inputBox')
const message = document.querySelector ('#message')

button.addEventListener("click", function(){
    alert ("click")
    message.innerHTML = '<h1> aaaa</h1>'
})
}