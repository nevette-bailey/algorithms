function birthdayCakeCandles(ar) {
  let counter = 0;
  ar.sort();
  const maxNum = Math.max(...ar);

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === maxNum) {
      counter++;
    }
  }
  return counter;
}
