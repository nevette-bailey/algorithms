function kangaroo(x1, v1, x2, v2) {
  if (v2 > v1) {
    return 'NO';
  } else {
    for (let i = 0; i <= 10000; i++) {
      if (x1 + v1 * i === x2 + v2 * i) {
        return 'YES';
      }
    }
  }
  return 'NO';
}
