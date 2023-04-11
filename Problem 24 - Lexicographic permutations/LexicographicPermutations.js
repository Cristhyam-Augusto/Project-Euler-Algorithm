function lexicographicPermutations(n) {
  const fat = (num) => (num === 0 ? 1 : num * fat(num - 1));
  let cont = 9;
  const nums = [...Array(10).keys()];
  const fatoriais = nums.map((el) => fat(cont--));
  let response = "";
  for (let i = 0; i <= fatoriais.length; i++) {
    const fatAtual = fatoriais[i];
    const mult = Math.floor(n / fatAtual);
    const resto = n % fatAtual;
    n = resto;
    response += nums.splice(mult, 1);
  }
  return +response;
}

lexicographicPermutations(999999);
