"use strict";

function maxPossible(numb1, numb2) {
  let firstNumb = numb1.toString().split("");
  let secondNumb = numb2.toString().split("");

  for (let i = 0; i < firstNumb.length; i++) {
    let maxSecondArr = -1;
    let maxIndex = -1;
    for (let j = 0; j < secondNumb.length; j++) {
      if (maxSecondArr < secondNumb[j]) {
        maxSecondArr = secondNumb[j];
        maxIndex = j;
      }
    }
    if (firstNumb[i] < maxSecondArr) {
      firstNumb[i] = maxSecondArr;
      secondNumb.splice(maxIndex, 1);
    }
  }

  return firstNumb.join("");
}

console.log(maxPossible(9328, 456));
console.log(maxPossible(9132, 5564));
