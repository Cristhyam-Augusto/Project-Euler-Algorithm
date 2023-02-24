function sumSquareDifference(n) {
  let sumOfSquares = 0;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sumOfSquares += i * i;
    sum += i;
  }

  const squareOfSum = sum * sum;
  const difference = squareOfSum - sumOfSquares;

  return difference;
}
