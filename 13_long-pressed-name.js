/*
Long Pressed Name

Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

Example 1:
  Input: name = "alex", typed = "aaleex"
  Output: true
  Explanation: 'a' and 'e' in 'alex' were long pressed.

Example 2:
  Input: name = "saeed", typed = "ssaaedd"
  Output: false
  Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.

Example 3:
  Input: name = "leelee", typed = "lleeelee"
  Output: true

Example 4:
  Input: name = "laiden", typed = "laiden"
  Output: true
  Explanation: It's not necessary to long press any character.
 */
/*eslint complexity: ["error", 20]*/

function isLongPressedName(name, typed) {
  let namePointerIdx = 0;
  let typedPointerIdx = 0;
  let boolCheck = false;
  while (typedPointerIdx < typed.length && namePointerIdx < name.length) {
    if (
      name[namePointerIdx] === typed[typedPointerIdx] &&
      namePointerIdx === name.length - 1
    ) {
      return true;
    } else if (name[namePointerIdx] === typed[typedPointerIdx]) {
      typedPointerIdx++;
      boolCheck = true;
      if (typed[typedPointerIdx] === name[namePointerIdx + 1]) {
        namePointerIdx++;
      }
    } else if (name[namePointerIdx] !== typed[typedPointerIdx] && boolCheck) {
      namePointerIdx++;
      boolCheck = false;
    } else {
      return false;
    }
  }
  return false;
}

console.log('true?', isLongPressedName('alex', 'aaleex'));
console.log('false?', isLongPressedName('saeed', 'ssaaedd'));
console.log('true?', isLongPressedName('leelee', 'lleeelee'));
console.log('true?', isLongPressedName('laiden', 'laiden'));
