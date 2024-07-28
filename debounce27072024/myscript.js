
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