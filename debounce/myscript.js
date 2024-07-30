//Write a debounce function. An example of its use is to limit excessive calling of the method while scrolling the page Hint: use setTimeout which you learned in the previous lesson :)

function debounce(func, delay) {
        let timer;
        return function (...args){
        clearTimeout(timer);
          timer = setTimeout (() => func.apply(this,args),delay);
        };
      }
      
      const Scroll= debounce(() => {
        console.log ('scroll after delay');
      }, 800);
   
      window.addEventListener('scroll',Scroll);
     