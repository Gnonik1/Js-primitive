console.log("Hello World From app.js");
let userName1 = "Josh";
const userName2 = "Tereza";
console.log(`How are you, ${userName1}?`);
console.log(`I am fine, thanks, ${userName2}`);
console.log("Do you like JavaScript, " + userName2 + "?");
console.log("I like JavaScript, " + userName1 + "!");
const doesUserAgree = true;
let userAge = 25;
console.log(
  `I have heard ${userName2}, that you are ${userAge} years old, ${doesUserAgree}?`,
);
let userAge2 = 27;
console.log(`No, I am ${userAge2} years old, ${userName1}.`);
const differenceBetweenUserAge2andUserAge = userAge2 - userAge;
console.log(
  "So, the difference is " + differenceBetweenUserAge2andUserAge + " years.",
);
// console.log(
//   `So, the difference is ${differenceBetweenUserAge2andUserAge} years.`,
// );
let userStatus;
let userCity = null;
console.log("typeof userStatus:", typeof userStatus);
console.log("typeof userCity:", typeof userCity);

const text1 = "Are";
const text2 = "Right,";
const combinedText = "You " + text1 + " " + text2 + " " + userName1 + "!";
console.log(combinedText);
let dayOfWeek = "Thursday";
let favoriteActivity = "dance";
let name = "Elizabeth";
console.log(`let's ${favoriteActivity} on ${dayOfWeek}, with ${name}!`);

console.log(
  `Hi, my name is ${name}, today is ${dayOfWeek}, a perfect day for ${favoriteActivity}.`,
);

let sentenceOld =
  "Hi, my name is " +
  name +
  "! Today is " +
  dayOfWeek +
  ", a perfect day for " +
  favoriteActivity +
  ".";
console.log(sentenceOld);

let sentenceModern = `Hi, my name is ${name}! Today is ${dayOfWeek}, a perfect day for ${favoriteActivity}.`;
console.log(sentenceModern);
