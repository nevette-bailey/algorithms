function timeConversion(s) {
  if (s.includes('PM') && s.substring(0, 2) !== '12') {
    let newHour = 12 + Number(s.substring(0, 2));
    return `${newHour}${s.substring(2, 8)}`;
  } else if (s.includes('AM') && s.substring(0, 2) === '12') {
    let newHour = '00';
    return `${newHour}${s.substring(2, 8)}`;
  } else {
    return s.substring(0, 8);
  }
}
