function digitFibonacci(n) {
  let fn = 1;
  let fn1 = 0;
  let fn2 = 0;
  let index = 1;

  while (true) {
    fn1 = fn;
    fn = fn1 + fn2;
    fn2 = fn1;
    index += 1;
    if (fn.toString().length === n) {
      break;
    }
  }

  return index;
}
