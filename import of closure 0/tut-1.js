function genrate(){
    let x = 5;

    return function(){
        x++;
        console.log(x);
    }
}

const retFunc = genrate();
console.dir(retFunc);  // yaha par esko expland karna to closure milega apko.
/*
ƒ anonymous()
length: 0
name:""
prototype: {}
arguments:null
caller:null
[[FunctionLocation]]: tut-1.js:4
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[3]
*/

// so just click on the [[Scopes]]: Scopes[3] and then you see the clousere.