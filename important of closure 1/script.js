function genrate(){
    let x = 10;

    return function(){
        x+=10;
        console.log(x);
    }
}

const retFunc = genrate();
retFunc(); // 20
retFunc(); // 30
retFunc(); // 40
retFunc(); // 50