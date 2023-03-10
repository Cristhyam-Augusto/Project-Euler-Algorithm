function powerDigitSum(exponent) {
  const power = BigInt(Math.pow(2, exponent));
  const digits = power.toString().split("");
  const sum = digits.reduce((acc, curr) => acc + parseInt(curr), 0);
  return sum;
}
