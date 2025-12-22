const myInp = document.querySelector("#myinp");

// console.log(myInp);

function debounce(func,delay){
    let timerId;
    return function(...args){
        if(timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(()=>{
            console.log(this);  // input
            func.call(this,...args);
        },delay);
    }
}


function apiCall(event){
    console.log(event.target.value);
}

const retFun = debounce(apiCall,1000);

myInp.addEventListener("input",retFun);
// retFun.call(myInp, event);