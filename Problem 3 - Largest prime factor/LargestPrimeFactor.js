function largestPrimeFactor(number) {
  let largestFactor = 1;
  let factor = 2;

  while (factor <= number) {
    if (number % factor === 0 && isPrime(factor)) {
      largestFactor = factor;
      number /= factor;
    } else {
      factor++;
    }
  }

  return largestFactor;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

largestPrimeFactor(13195);
