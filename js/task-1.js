'use strict';
console.log('==================== Task 1');

function slugify(title) {
  // It could be done with regular expression faster :-)
  // return title.toLowerCase().replace(/\s+/g, '-');
  return title.toLowerCase().split(' ').join('-');
}

console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
