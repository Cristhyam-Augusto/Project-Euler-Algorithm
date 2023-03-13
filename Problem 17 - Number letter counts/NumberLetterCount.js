function numberLetterCounts(limit) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const hundred = "hundred";
  const thousand = "thousand";

  let count = 0;

  for (let i = 1; i <= limit; i++) {
    let numberString = "";
    let onesDigit = i % 10;
    let tensDigit = Math.floor(i / 10) % 10;
    let hundredsDigit = Math.floor(i / 100) % 10;
    let thousandsDigit = Math.floor(i / 1000) % 10;

    if (thousandsDigit > 0) {
      numberString += ones[thousandsDigit] + thousand;
    }
    if (hundredsDigit > 0) {
      numberString += ones[hundredsDigit] + hundred;
      if (tensDigit > 0 || onesDigit > 0) {
        numberString += "and";
      }
    }
    if (tensDigit === 1) {
      numberString += teens[onesDigit];
    } else {
      numberString += tens[tensDigit];
      numberString += ones[onesDigit];
    }

    count += numberString.length;
  }

  return count;
}
