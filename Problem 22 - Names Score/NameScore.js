function namesScores(arr) {
  arr.sort();

  let totalScore = 0;

  for (let i = 0; i < arr.length; i++) {
    let nameScore = 0;
    let name = arr[i];

    for (let j = 0; j < name.length; j++) {
      nameScore += name.charCodeAt(j) - 64;
    }

    totalScore += nameScore * (i + 1);
  }

  return totalScore;
}

const test1 = ["THIS", "IS", "ONLY", "A", "TEST"];
const score1 = namesScores(test1);
console.log(score1);

const test2 = ["I", "REPEAT", "THIS", "IS", "ONLY", "A", "TEST"];
const score2 = namesScores(test2);
console.log(score2);
