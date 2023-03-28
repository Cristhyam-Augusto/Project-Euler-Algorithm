function sumOfProperDivisors(n) {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) {
        sum += i;
      } else {
        sum += i + n / i;
      }
    }
  }
  return sum - n;
}

function sumAmicableNum(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    const divSum = sumOfProperDivisors(i);
    if (divSum !== i && sumOfProperDivisors(divSum) === i) {
      sum += i;
    }
  }
  return sum;
}

sumAmicableNum(10000);
