'use strict';

const string = 'Andrew Silent';
const anotherRegexp = '^\D[0-9_A-Za-z]{5,42}$'

function validateFullName(string) {
  const regexp = /^[A-Z][a-z]* [A-Z][a-z]*$/m;
  return regexp.test(string)
  ? console.log('success')
  : console.log('error');
}

validateFullName(string);