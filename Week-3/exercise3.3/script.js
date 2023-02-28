function createlncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createlncrement();
increment();
increment();
increment();
log(); // What is logged?

// The output of this code is 0 beacuse we put increment function in createlncrement function
/* When log() is called, it will output the message "count is 0", because the message variable is 
defined and assigned to the string "count is 0" when the createlncrement() function is first invoked 
and count is still equal to its initial value of 0.*/
