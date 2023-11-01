// make the sum of the arguments guven to a function but the parameter is not given and we have 0 oparametre how would you access thode arguments without parameter

// simple by arguments method or function

function vikas(){
    console.log(arguments);

    var sum = 0;

    for(var i in arguments){
        sum = sum+arguments[i];
    }
    console.log(sum);
    

}
vikas(10,20,30,40)