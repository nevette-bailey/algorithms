function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCounter = 0;
  let orangeCounter = 0;

  apples.forEach((apple) => {
    if (s <= a + apple && a + apple <= t) {
      appleCounter++;
    }
  });

  oranges.forEach((orange) => {
    if (s <= b + orange && b + orange <= t) {
      orangeCounter++;
    }
  });

  console.log(appleCounter);
  console.log(orangeCounter);
}
