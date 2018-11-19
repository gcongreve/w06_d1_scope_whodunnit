// # Scope Homework: Who Dunnit
//
// ### Learning Objectives
//
// - Understand function scope
// - Know the difference in between the let and const keywords
//
// ## Brief
//
// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.
//
// ### MVP
//
// #### Episode 1
//
// ```js
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
// guess : Miss Scarlet
// murderer is a key in the scenario variable, with the value of 'Miss Scarlet'. declareMurderer returns the value of the murderer key from the scenario variable.


// ```
//
// #### Episode 2
//
// ```js
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//guess : Mrs Peacock
//error message - Proffessor Plum is set as a const variable. When there is an attempt to change this const there is an error message.

// ```
//
// #### Episode 3
//
// ```js
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// first - Mrs Peacock
// second - Professor Plumb
//  The first verdict is Mrs Peacock which is the result of the  declareMurderer function running within the variable firstVerdict.  The second verdict is Professor Plumb which is what the murderer was originally set as - the scope of the declareMurderer funcion was only within the firstVerdict variable.

// ```
//
// #### Episode 4
//
// ```js
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// guess : three = Mrs. Peacock.

// The 3 suspects are defined outside of a function at the top. The declareAllSuspects function changes suspect 3 to 'Col Mustard' inside the function. The first console log will log the first 2 suspects as normal and replace the 3rd with 'Col Mustard'. The Suspect three from the bottom line will still be Mrs Peacock as it is not within the declareAllSuspects function.

// ```
//
// #### Episode 5
//
// ```js
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

//guess : weapon is the Revolver
//scenario is an object with key/values. The changeWeapon function changes the value of the scenario weapon key to whatever the newWeapon argument is. The  changeWeapon function is called with an argument of 'Revolver', which changes the weapon in scenario from 'Candle Stick' to 'Revolver'

// ```
//
// #### Episode 6
//
// ```js
// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//guess : Col Mustard - wrong
// The function changeMurderer contains another method called plotTwist. When the changeMurderer function is called, it calls the plotTwist funcion which changes the murderer to Mrs. White.

// ```
//
// #### Episode 7
//
// ```js
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//guess : Colonel Mustard - wrong
//the changeMurderer function contains another 2 functions, the plotTwist function is called last and tries to declare the murderer as 'Col Mustard' using 'let', the murdrerer has already been set using a 'let' so this causes an error - this results in the murderer being set as 'Mr Green'
// ```
//
// #### Episode 8
//
// ```js
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

//guess = candle stick.
//The weapon is originally the lead pipe. The changeScenario function is called - changing the murderer to Peacock and thr room to 'Dining', this function also calls the plotTwist function, with an argument of 'Dining Room' - as the room has been changed to dining room the functions if statement is true which changes the murderer to 'Col Mustard', which means that the unexpectedOutcome('Colonel Mustard') functions conditions are met ("col mustard === murderer"), which changes the weapon to a 'Candle Stick'


// ```
//
// #### Episode 9
//
// ```js
// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
// guess = Professor Plum
// The murderer is Plum which means that the if statement is true, which changes the murder to Peacock - this means that the if statement is no longer true, which means that murderer is no longer Mrs Peacock and Professor Plumb again.

// ```
//
// ### Extensions
//
// Make up your own episode!
