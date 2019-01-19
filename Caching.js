const cachedValue={"A":"A"}

function isCached(key) {
    return cachedValue[key];
}

function cacheTheValues(key,value){
    if(isCached(key)){
        console.log("The value is already cached")
      return cachedValue[key];
    }else{
        console.log("This is new Value so adding it now")
        cachedValue[key]=value;
    }
}


function Test(key,value){

    return cacheTheValues(key,value);

}

Test("A","A");