function smallestMult(n) {
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado = mmc(resultado, i);
  }

  return resultado;
}

function mmc(a, b) {
  return (a * b) / mdc(a, b);
}

function mdc(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
