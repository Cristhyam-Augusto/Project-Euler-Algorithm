function sumOfProperDivisors(n) {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (n / i !== i && i !== 1) {
        sum += n / i;
      }
    }
  }
  return sum;
}

function isAbundant(n) {
  return sumOfProperDivisors(n) > n;
}

function getAbundantNumbers(limit) {
  const abundantNumbers = [];
  for (let i = 12; i <= limit; i++) {
    if (isAbundant(i)) {
      abundantNumbers.push(i);
    }
  }
  return abundantNumbers;
}

function getAbundantSums(limit) {
  const abundantNumbers = getAbundantNumbers(limit);
  const abundantSums = new Set();
  for (let i = 0; i < abundantNumbers.length; i++) {
    for (let j = i; j < abundantNumbers.length; j++) {
      const sum = abundantNumbers[i] + abundantNumbers[j];
      if (sum <= limit) {
        abundantSums.add(sum);
      }
    }
  }
  return abundantSums;
}

function sumOfNonAbundantNumbers(n) {
  const abundantSums = getAbundantSums(n);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (!abundantSums.has(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfNonAbundantNumbers(28123));
