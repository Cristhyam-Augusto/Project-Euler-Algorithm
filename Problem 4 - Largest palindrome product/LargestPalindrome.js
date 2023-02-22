function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function largestPalindromeProduct() {
  let largestPalindromeProduct = 0;
  for (let i = 10; i <= 99; i++) {
    for (let j = i; j <= 99; j++) {
      const product = i * j;
      if (isPalindrome(String(product)) && product > largestPalindromeProduct) {
        largestPalindromeProduct = product;
      }
    }
  }
  return largestPalindromeProduct;
}

largestPalindromeProduct(3);
