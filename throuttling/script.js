const body = document.querySelector('body');
console.log(body);
count = 0;


function throuttle(func,delay){
    let waiting = false;
    return function(...args){
        if(!waiting){
            waiting = true;
            setTimeout(()=>{
                func.call(this,...args);
                waiting = false;
            },delay)
        }
    }
}

const throttledMouseMove = throuttle(function(){
    count += 1;
    console.log(count);
},1000);

body.addEventListener("mousemove",throttledMouseMove);