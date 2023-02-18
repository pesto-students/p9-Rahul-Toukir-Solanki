let items = [];

function createStack() {
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      items.pop();
    },
  };
}

const stack = createStack();

stack.push(10);
stack.push(5);
stack.pop(); //=5
console.log(stack.items); // => undefined
