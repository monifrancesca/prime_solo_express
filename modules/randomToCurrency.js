var toCurrency = function(num) {
	return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

module.exports = toCurrency;