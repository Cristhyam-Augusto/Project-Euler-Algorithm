function divisibleTriangleNumber(n) {
  let triangleNumber = 1;
  let i = 2;
  while (true) {
    triangleNumber += i;
    let divisors = countDivisors(triangleNumber);
    if (divisors > n) {
      return triangleNumber;
    }
    i++;
  }
}

function countDivisors(num) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      count += 2;
    }
  }
  if (Math.sqrt(num) * Math.sqrt(num) == num) {
    count--;
  }
  return count;
}

divisibleTriangleNumber(500);
