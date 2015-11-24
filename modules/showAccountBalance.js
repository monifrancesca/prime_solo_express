//The third module should require the other two modules. It should have two function exports. 
//The first function export should be the return of the first module being passed into the second module. 
//The other function should be a simple text return that says “Account balance: \n”.

// to pull data from other modules you need to require them
var randomNumber = require('./randomNumber.js');
var toCurrency = require('./randomToCurrency.js');

//app.route('/app.js');


var showAccountBalance = function() {
  return 'Account Balance: \n' + toCurrency(randomNumber(100, 1000));
};

/*
// take in a random number and convert it to US currency
var toCurrency = function() {
	return currencyConvert(randomNumber);
};

// return some text
var accountBalance = function() {
	return 'Account balance: \n';
}
*/

// then export
module.exports = showAccountBalance;
//module.exports = accountBalance;
