(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  };
}

// alert(max(2, 3));

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

function maxOfThree(num1, num2, num3) {
  //checks if num1 is greater than num2
  const max_of_first_two = num1 > num2 ? num1 : num2;
  //checks if greatest of num1 and num2 is greater than num3
  const max_of_last_two = max_of_first_two > num3 ? max_of_first_two : num3;
  return max_of_last_two;
}

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

function isVowel(str) {
  if (str.length === 1) {
    const vowels = "aeiouAEIOU";
    return vowels.includes(str); //return the trueness or falseness of it being a vowel
  } else { //if anything BUT a single letter is passed into this function...
    return "Please submit a single letter.";
  }
}

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

function rovarspraket(str) {
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    //always add every letter found, even if not a consonant
    newstr += str[i];
    //if letter is a consonant, add "o{double of the consonant}" to the end of that
    if (consonants.includes(str[i])) {
      newstr += `o${str[i]}`
    }
  }
  return newstr;
}

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

function sum(list) {
  //function uses a beginning value of 0, and just adds to that
  let total = 0;
  for (let i of list) {
    total += i;
  }
  return total
}

function multiply(list) {
  //function uses a beginning value of 1, and just multiplies to that
  let total = 1;
  for (let i of list) {
    total *= i;
  }
  return total
}

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

function reverse(str) {
  //split string into list
  const parsing_list = str.split("");
  let reversed_string = []
  //add every character to the beginning, add to a new list
  for (let i of parsing_list) {
    reversed_string.unshift(i);
  }
  //return list converted to string
  return reversed_string.join("");
}

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

function findLongestWord(list) {
  //split string into list
  let longest_word_length = 0;
  //longest word length starts at 0. for every item in the list, if the item length is greater than longest word length, the item length becomes the longest word length
  for (let i of list) {
    if (i.length > longest_word_length) {
      longest_word_length = i.length;
    }
  }
  return longest_word_length;
}

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

function filterLongWords(list, i) {
  let longer_word_list = [];
  //for every item in the list, if the item length is greater the specified value, it will be included in the new list
  for (let x of list) {
    if (x.length > i) {
      longer_word_list.push(x)
    }
  }
  return longer_word_list;
}

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

function charFreq(str) {
  let frequency_list = {};
  for (let x of str) {
    if (!(x in frequency_list)) { //starts by checking if item is already in the object; if not, it adds the letter and gives it a starting value of 1
      frequency_list[x] = 1;
    } else { //if already in the object, adds 1 to the value of the letter
      frequency_list[x] += 1;
    };
  }
  return frequency_list
}


  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
