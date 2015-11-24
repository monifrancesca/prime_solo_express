//The first module will export a function that returns a random number after taking in a min and max value 
//as arguments.
// hint: use the function that we used in previous assignments). When you call this module, 
//use '100' as your min, and '1000000' as your max.

//var rand = 1 + Math.floor(Math.random() * 3);

// Number randomizer
var randomNumber = function randomNumber(min, max) {
 return Math.random() * (max - min) + min;
};

/*function returnRand(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
*/

// create node module to be able to share between modules
module.exports = randomNumber;