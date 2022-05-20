function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function fn(){return "Hi there, my name is fn"};
}

function returnsAnAnonymousFunction(){
    return function(){return "What's my name, though?"};
}