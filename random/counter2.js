/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let current = init;
  let resetValue = init;

  function increment() {
    current += 1;

    console.log("reset", resetValue);
    console.log("inc", current);
    return current;
  }
  function reset() {
    current = resetValue;
    console.log("reset", resetValue);
    console.log("current", current);
    return current;
  }
  function decrement() {
    current -= 1;

    console.log("reset", resetValue);
    console.log("dec", current);
    return current;
  }
  return {
    reset: reset,
    increment: increment,
    decrement: decrement,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
