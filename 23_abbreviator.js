const Mocha = require('mocha');
const assert = require('assert');
const mocha = new Mocha();
mocha.suite.emit('pre-require', this, 'solution', mocha);
// ^^^^^^^ ignore this ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

/*
 * Abbreviations (a11s)
 *
 * Implement an abbreviate() function.
 * It should abbreviate words in the following format:
 *
 * “accessibility” => “a11y”
 * “internationalization” => “i18n”
 * "Etsy" => "E2y"
 * "" => ""
 * null => ""
 * ab => ab
 * abc => abc
 */
function abbreviateWords(str) {
  // if (str === undefined) return ''
  if (str.length <= 3) return str;
  let returnStr = '';
  const returnInt = str.length - 2;
  returnStr += str[0];
  returnStr += returnInt;
  returnStr += str[str.length - 1];
  return returnStr;
}

function abbreviate(str) {
  if (str === undefined) return '';
  if (str.length <= 3) return str;
  const strArr = str.split(' ');
  let returnArr = [];
  for (let i = 0; i < strArr.length; i++) {
    let abbrWord = abbreviateWords(strArr[i]);
    if (returnArr.includes(abbrWord)) {
      returnArr.push(strArr[i]);
    } else {
      returnArr.push(abbrWord);
    }
  }
  return returnArr.join(' ');
}

// Write some tests
describe('The abbreviate() function', function() {
  // A basic test case
  it('should return the abbreviated value', function() {
    assert.equal(abbreviate('accessibility'), 'a11y');
    assert.equal(abbreviate('internationalization'), 'i18n');
    assert.equal(abbreviate('Etsy'), 'E2y');
  });

  it('should handle edge cases', function() {
    assert.equal(abbreviate('abc'), 'abc');
    assert.equal(abbreviate('ab'), 'ab');
    assert.equal(abbreviate('a'), 'a');
    assert.equal(abbreviate(''), '');
    assert.equal(abbreviate(), '');
  });

  it('should handle words', function() {
    assert.equal(abbreviate('keep commerce human'), 'k2p c6e h3n');
    assert.equal(abbreviate('code as craft'), 'c2e as c3t');
  });

  it('should not duplicate abbreviations', function() {
    assert.equal(
      abbreviate('charting our crafting abilities'),
      'c6g our crafting a7s'
    );
    assert.equal(abbreviate('carl is a cool person'), 'c2l is a cool p4n');
    // assert.equal(abbreviate("carl is a cool carl"), "c2l is a cool c2l");
  });
});

// This runs the tests
mocha.run();
