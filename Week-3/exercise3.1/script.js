let sum = 0;
function calc (n) {
    for(let i=0; i<=n; i++){
        sum+=i;
    }
    return sum;
};


const memoize = (fun)=>{
    let cache={};
    return function(...args){
        let n = args[0];
        if (n in cache){
            return cache[n];
        }else{
            let result =fun(n);
            cache[n] = result;
            return result;
        }
    }
}

const el = memoize(calc);


console.time();

console.log(el(500000000));
console.timeEnd();

console.time();
console.log(el(500000000));
console.timeEnd();