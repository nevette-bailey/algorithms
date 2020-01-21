function babyShark() {
  const sharks = ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa'];
  const doo = ' doo'.repeat(6);
  return sharks
    .map((shark) => {
      const dooLine = `${shark} shark${doo}\n`;
      const dooChunk = dooLine.repeat(3);
      const lastLine = `${shark} shark!`;
      return `${dooChunk}${lastLine}`;
    })
    .join('\n');
}
console.log(babyShark());

/* shorter version:
function babyShark() {
  return ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa'].map(shark => `${`${shark} shark${' doo'.repeat(6)}\n`.repeat(3)}${shark} shark!`).join('\n')
}


console.log(babyShark());

*/
