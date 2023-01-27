function createlncrement() {
let count = 0;
function increment() {
    count++;
}
let message = `count is ${count}`;
function log() {
console.log(message);
}
return [increment,log];
}
const [increment,log] = createlncrement();
increment();
increment();
increment();
log(); // What is logged?

// The output of this code is 0 beacuse we put increment function in createlncrement function