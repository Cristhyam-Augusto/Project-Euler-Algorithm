function primeSummation(n) {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  let sum = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

primeSummation(2000000);
