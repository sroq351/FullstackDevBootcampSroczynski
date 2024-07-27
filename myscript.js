//Let's assume that we would like to create some textarea element with counter to show live how many chars user used for them message:

const message = document.querySelector('#message');
const counter = document.querySelector('#counter');

message.addEventListener('input', event => {
    const length = event.target.value.length;
    counter.textContent = length;
     
    if (length > 50) {
     counter.style.color = 'red';
    } else {
     counter.style.color = 'black';
    }
   });
//How to create new DOM element?

   const button = document.getElementById("addElement");
   
   button.addEventListener("click",()=> {
    const heading = document.createElement("h2")
    heading.textContent= "Hello";
    heading.style.color= "green";
    heading.style.FontSize "12px"

    document.body.appendChild(heading)
   })
