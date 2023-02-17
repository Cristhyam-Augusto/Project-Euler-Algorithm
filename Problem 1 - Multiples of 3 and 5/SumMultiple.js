function multiplesOf3and5(number) {
  const sumMultiples = (n, k) => {
    const m = Math.floor((n - 1) / k);
    return (k * (m * (m + 1))) / 2;
  };
  return (
    sumMultiples(number, 3) + sumMultiples(number, 5) - sumMultiples(number, 15)
  );
}
