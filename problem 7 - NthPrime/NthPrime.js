function nthPrime(n) {
  let count = 0;
  let num = 2;

  while (count < n) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
    if (count === n) {
      return num;
    }
    num++;
  }
}
