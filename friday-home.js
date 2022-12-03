function question(which) {
  return console.log(
    `\n---------------------->EXERCISE ${which}<----------------------`
  );
}

// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/

question("A");

let test = "string value";
console.log(test);

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/

question("B");

let sum = 10 + 20;
console.log(sum);

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/
question("C");

let random = Math.floor(Math.random() * 21);
console.log(random);

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/

question("D");

let me = {
  name: "Piotr",
  surname: "Rodzen",
  age: 32,
};
console.log(me);

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/
question("E");

function removeAge(object) {
  delete object.age;
  return object;
}
console.log(removeAge(me));

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/

question("F");

function addingSkills(object) {
  object.skills = ["CSS", "HTML", "Javascript"];
  return object;
}
console.log(addingSkills(me));

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

question("G");

function removeLastSkill(object) {
  delete object.skills.pop();
  return object;
}

console.log(removeLastSkill(me));

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/

question(1);

function dice() {
  return Math.floor(Math.random(1) * 7);
}

console.log(dice());

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/
question(2);

function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(whoIsBigger(10, 11));

/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/

question(3);

function splitMe(aString) {
  return aString.split(" ");
}
console.log(splitMe("Lets see if it works"));

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

question(4);

function delteOne(firstString, secondBool) {
  if (secondBool === true) {
    return firstString.replace(firstString[0], " ");
  } else {
    let slicedLast = firstString.slice(0, -1);
    return slicedLast;
  }
}
console.log(delteOne("First or Last", true));
console.log(delteOne("First or Last", false));

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/

question(5);

function onlyLetters(aStringOnly) {
  return aStringOnly.replace(/[0-9]/g, "");
}
console.log(onlyLetters("It's 2022 and we are in 21st century"));

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/

question(6);

function isThisAnEmail(email) {
  if (email.includes("@" && ".") && email.length > 5) {
    console.log("This is a valid email address");
    return true;
  } else {
    console.log("This is not a valid email address");
    return false;
  }
}
isThisAnEmail("aaaa@.com");
isThisAnEmail("a@.co");
isThisAnEmail("a@com");

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/

question(7);

function whatDayIsIt() {
  let fullDate = new Date();
  let dayOfTheWeek = fullDate.getDay();
  return dayOfTheWeek;
}

console.log(whatDayIsIt());

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}
function dice() {
  return Math.floor(Math.random(1) * 7);
}

*/

question(8);

function rollTheDices(num) {
  let arr = {};
  arr.arr = [];
  arr.sum = 0;
  for (let i = 0; i < num; i++) {
    arr.arr[i] = dice();
    arr.sum += arr.arr[i];
  }
  console.log(arr);
}
console.log(rollTheDices(10));

/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/
question(9);

function howManyDays(year, month, day) {
  let theDate = new Date(year, month, day);
  let today = new Date();
  let differenceInMs = today - theDate;
  let differenceInDays = differenceInMs / (1000 * 3600 * 24);
  differenceInDays = parseInt(differenceInDays);
  return differenceInDays;
}

console.log(
  "Since the day inserted passed:",
  howManyDays(1989, 11, 13),
  "days"
);
/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/
question(10);

function isTodayMyBirthday() {
  let theDate = new Date();
  let myBirthday = new Date(1989, 11, 13);
  if (theDate === myBirthday) {
    console.log("Yes today is my birthday!");
  } else {
    console.log("No it's not yet my birthday");
  }
}
isTodayMyBirthday();

// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/

question(11);
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },

  {
    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },

  {
    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

function deleteProp(obj, str) {
  obj.forEach((object) => {
    delete object[str];
  });
  return console.log(obj);
}

deleteProp(movies, "Type");
/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/
question(12);

function oldestMovie(arrayProvided) {
  let lowest = Number.POSITIVE_INFINITY;
  let tmp;
  for (let i = arrayProvided.length - 1; i >= 0; i--) {
    tmp = arrayProvided[i].Year;
    if (tmp < lowest) lowest = tmp;
  }
  console.log("The oldest movie of the bunch is from", lowest);
}
oldestMovie(movies);
/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/

question(13);

function countMovies(arrayProvided) {
  let count = arrayProvided.length;
  return console.log(`There is ${count} movies in the array`);
}
countMovies(movies);

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/

question(14);

function onlyTheTitles(arrayProvidedToCopy) {
  let newwArray = [];
  for (let i = 0; i < arrayProvidedToCopy.length; i++) {
    newwArray.push(arrayProvidedToCopy[i].Title);
  }
  return newwArray;
}
let modArray = onlyTheTitles(movies);
console.log(modArray);
/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/
question(15);

function onlyInThisMillennium(array) {
  let arrayMilenium = [];
  newwArray = Object.assign(arrayMilenium, array);
  for (let i = 0; i < arrayMilenium.length; i++) {
    if (arrayMilenium[i].Year < 2000) delete arrayMilenium[i];
  }
  return arrayMilenium;
}
let modArray2 = onlyInThisMillennium(movies);
console.log(modArray2);
/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/

question(16);

question(16);
function getMovieById(array, iD) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].imdbID === iD) {
      let thisMovie = array[i];
      return console.log(thisMovie);
    }
  }
}
getMovieById(movies, "tt4154756");

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/

function sumAllTheYears(theArrayToSum) {
  let countYears = 0;
  for (let i = 0; i < theArrayToSum.length; i++) {
    let years = parseInt(theArrayToSum[i].Year);
    countYears = countYears + years;
  }
  return console.log(countYears);
}
sumAllTheYears(movies);
/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/

question(18);

function searchByTitle(providedArray, searchWord) {
  let arrayTitle = [];
  let toSearch = searchWord;
  for (let i = 0; i < providedArray.length; i++) {
    let changeLower = providedArray[i].Title.toLowerCase();
    if (changeLower.includes(toSearch)) arrayTitle += "\n ----" + changeLower;
  }
  return arrayTitle;
}
console.log(
  "Here is the list of movies with the searched term:\n",
  searchByTitle(movies, "lord")
);

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/

question(19);
function allTheRest(providedArray, searchTerm) {
  let arrayTitle = [];
  let toSearch = searchTerm;
  for (let i = 0; i < providedArray.length; i++) {
    let changeLower = providedArray[i].Title.toLowerCase();
    if (changeLower.includes(toSearch) === false)
      arrayTitle += "\n ----" + changeLower;
  }
  return arrayTitle;
}

function searchAndDivide(searchTerm) {
  let nameOfObject = {};
  nameOfObject.match = [searchByTitle(movies, searchTerm)];
  nameOfObject.unmatch = [allTheRest(movies, searchTerm)];
  console.log(`This is the array with match\n, ${nameOfObject.match}`);
  console.log(`\nThis is the array without a match\n ${nameOfObject.unmatch}`);
}

searchAndDivide("lord");
/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/

question(20);

function removeIndex(anArray, aNumber) {
  for (let i = 0; i < anArray.length; i++) {
    if (i === aNumber) {
      anArray.splice(i, 1);
    }
  }
}

removeIndex(movies, 0);
console.log(movies);

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/

question(21);

function halfTree(aNumOfStars) {
  let star = "*";
  for (let i = 0; i < aNumOfStars; i++) {
    console.log(star.repeat(i));
  }
}
halfTree(10);
/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****

*/
function tree(aNumOfStars) {
  let star = "*";
  for (
    let i = 0, index = aNumOfStars;
    i < aNumOfStars && index >= 0;
    i++, index--
  ) {
    console.log(" ".repeat(index) + star.repeat(i + 1) + star.repeat(i));
  }
}
tree(10);

/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/
question(23);

function isItPrime(isItPrime) {
  let positive = parseInt(isItPrime);
  let isPrime = true;
  if (positive === 1) {
    isPrime = false;
  } else if (positive > 1) {
    for (let i = 2; i < positive; i++) {
      if (positive % i == 0) {
        isPrime = false;
      }
    }
  }
  if (isPrime === true) {
    console.log(`${positive} is a prime number`);
  } else {
    console.log(`${positive} is a not prime number`);
  }
}

isItPrime(1);
/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */

// const movies = [
//   {
//     Title: "The Lord of the Rings: The Fellowship of the Ring",

//     Year: "2001",

//     imdbID: "tt0120737",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//   },

//   {
//     Title: "The Lord of the Rings: The Return of the King",

//     Year: "2003",

//     imdbID: "tt0167260",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
//   },

//   {
//     Title: "The Lord of the Rings: The Two Towers",

//     Year: "2002",

//     imdbID: "tt0167261",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
//   },

//   {
//     Title: "Lord of War",

//     Year: "2005",

//     imdbID: "tt0399295",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
//   },

//   {
//     Title: "Lords of Dogtown",

//     Year: "2005",

//     imdbID: "tt0355702",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
//   },

//   {
//     Title: "The Lord of the Rings",

//     Year: "1978",

//     imdbID: "tt0077869",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
//   },

//   {
//     Title: "Lord of the Flies",

//     Year: "1990",

//     imdbID: "tt0100054",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
//   },

//   {
//     Title: "The Lords of Salem",

//     Year: "2012",

//     imdbID: "tt1731697",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
//   },

//   {
//     Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

//     Year: "1984",

//     imdbID: "tt0087365",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
//   },

//   {
//     Title: "Lord of the Flies",

//     Year: "1963",

//     imdbID: "tt0057261",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
//   },

//   {
//     Title: "The Avengers",

//     Year: "2012",

//     imdbID: "tt0848228",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
//   },

//   {
//     Title: "Avengers: Infinity War",

//     Year: "2018",

//     imdbID: "tt4154756",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
//   },

//   {
//     Title: "Avengers: Age of Ultron",

//     Year: "2015",

//     imdbID: "tt2395427",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
//   },

//   {
//     Title: "Avengers: Endgame",

//     Year: "2019",

//     imdbID: "tt4154796",

//     Type: "movie",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
//   },
// ];
