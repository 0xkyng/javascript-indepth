"Use strict";

// let markMass = 78;
// let marHeight = 1.69;

// let markBMI = 78 / 1.69 ** 2;
// console.log(markBMI);

// let JohnMass = 92;
// let JohnHeight = 1.95;

// let johnBMI = 92 / 1.95 ** 2;
// console.log(johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// let JohnHigherBMI = johnBMI > markBMI;
// console.log(markHigherBMI, JohnHigherBMI);

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI is higher than John's`);
// } else if (johnBMI > markBMI) {
//   console.log(`Joh's BMI is higher than mak's`);
// }

// console.log(
//   `Mark's BMI ${78 / 1.69 ** 2} is higher than John's BMI ${92 / 1.95 ** 2}`
// );

// const DolphinsAverageScore = (96 + 108 + 89) / 3;
// const KoalasAverageScore = (88 + 91 + 110) / 3;
// console.log(DolphinsAverageScore, KoalasAverageScore);

// if (DolphinsAverageScore > KoalasAverageScore) {
//   console.log("Team Dolphins won🎖🏆");
// } else if (KoalasAverageScore > DolphinsAverageScore) {
//   console.log("Team Koalas won🎖🏆");
// } else if (DolphinsAverageScore === KoalasAverageScore) {
//   console.log("That's a draw");
// }

// const DolphinsAverageScore = (97 + 112 + 101) / 3;
// const KoalasAverageScore = (109 + 95 + 123) / 3;
// console.log(DolphinsAverageScore, KoalasAverageScore);

// if (DolphinsAverageScore > KoalasAverageScore && DolphinsAverageScore >= 100) {
//   console.log("Team Dolphins won🎖🏆");
// } else if (
//   KoalasAverageScore > DolphinsAverageScore &&
//   KoalasAverageScore >= 100
// ) {
//   console.log("Team Koalas won🎖🏆");
// } else if (DolphinsAverageScore >= KoalasAverageScore) {
//   console.log("That's a draw");
// }

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill *0.2;

// FUNCTIONS
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const juiceMix = fruitProcessor(5, 6);
// console.log(juiceMix);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// FUNCTION DECLARATION

// The function in function declaration can be accessed before and after the function definition.
// const age1 = calcAge1(1991);
// function calcAge1(birthYear) {
//   const age = 2022- birthYear;
//   return age;
// }
//
// console.log(age1);

// FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//   const age = 2022 - birthYear;
//   return age;
// };

// const age2 = calcAge2(1991);
// console.log(calcAge2);

// FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//   const age = 2022 - birthYear;
//   return age;
// };

// ARROW FUNCTION
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// const yearsLeft = yearsUntilRetirement(1991, "Isaac");
// console.log(yearsLeft);

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePices = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePices} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// Coding Challenge
// let calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// let checkWiner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins won 🏆 (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas won 🏆 (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins`);
//   }
// };

// checkWiner(scoreDolphins, scoreKoalas);

// //TEST
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// checkWiner(scoreDolphins, scoreKoalas);

// ARRAYS
// EXERCISE
// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill *0.2;

// const calcTip = function (bill) {
//   return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// };

// OR USE  ARROW FUNCTIONS
// const calcTip = bill => bill <= 300 && bill >= 50 ? bill * 0.15 : bill *0.2;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

//OBJECTS
// They defined with {}
// They contain a key and a value
// The key is also called a property

const isaac = {
  firstName: "Isaac",
  middleName: "Teryima",
  lastName: "Wanger",
  age: 2037 - 1991,
  job: "Software Developer",
};
