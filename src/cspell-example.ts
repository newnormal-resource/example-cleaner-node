console.log('hello cspell');

const projectWordFooo = 'Fooo is considered good by the project dictionary.';
console.log(projectWordFooo);

// cspell:disable-next
console.log('*Badspelings* just after `disable-next` directive are ignored.');

console.log('This *badspeling* is ignored by inline drective `disable-line`.'); // cspell:disable-line

// Every word is ignored after `disable` directive until `enable` appears
// cspell:disable
const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
  'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ' +
  'veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
  'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate' +
  'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat' +
  'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id' +
  'est laborum.';
// cspell:enable
console.log(loremIpsum);

// cspell:disable
const badspeling = 'a variable with a typo';
console.log(badspeling);
// cspell:enable
