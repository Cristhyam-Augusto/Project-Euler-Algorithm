function specialPythagoreanTriplet(n) {
  let sumOf = n;

  for (let a = 1; a < sumOf; a++) {
    for (let b = a + 1; b < sumOf; b++) {
      const c = Math.sqrt(a * a + b * b);
      if (a + b + c === sumOf) {
        return a * b * c;
      }
    }
  }
}
