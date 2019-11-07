function gradingStudents(grades) {
  return grades.map((elem) => {
    if (elem >= 38) {
      let roundedGrade = Math.ceil(elem / 5) * 5;
      if (Math.abs(elem - roundedGrade) > 2) {
        return elem;
      } else {
        return Math.round(elem / 5) * 5;
      }
    } else {
      return elem;
    }
  });
}
