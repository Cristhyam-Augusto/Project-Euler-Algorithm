function collatzSequence(n) {
  let length = 1;
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    length++;
  }
  return length;
}

function longestCollatzSequence(limit) {
  let longestChainStart = 0;
  let longestChainLength = 0;
  for (let i = 1; i < limit; i++) {
    const length = collatzSequence(i);
    if (length > longestChainLength) {
      longestChainStart = i;
      longestChainLength = length;
    }
  }
  return longestChainStart;
}
