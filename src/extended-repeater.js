const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	//console.log(str);
	//console.log(options);
	let string = Object.entries(options);
	let q = string.length - 1;
	let r = options['repeatTimes'];
	//console.log(r);
	//console.log(string[0][0]);
	for (let i = 0; i <= q; i++) {
		if (string.length === 1 && string[i][0] === 'repeatTimes') {
			let repeatTimes = string[i][1];
			let w = '+';
			let t = str + w;
			return (t.repeat(repeatTimes - 1) + str);
			//console.log(string[i][1]);
		} 
		if (string.length === 2 && string[1][0] === 'separator') {
			let repeatTimes1 = string[0][1];
			let separator = string[1][1];
			let y = str + separator;
			return (y.repeat(repeatTimes1 - 1) + str);
		}
		if (string.length === 4 && string[2][0] === 'addition') {
			let repeatTimes = string[0][1];
			let separator = string[1][1];
			let addition = string[2][1];
			let additionRepeatTimes = string[3][1];
			let y = str + addition.repeat(additionRepeatTimes) + separator;
			return (y.repeat(repeatTimes - 1) + str + addition.repeat(additionRepeatTimes));
		}
		if (string.length === 5) {
			let repeatTimes = string[0][1];
			let separator = string[1][1];
			let addition = string[2][1];
			let additionRepeatTimes = string[3][1];
			let additionSeparator = string[4][1];
			let u = addition + additionSeparator
			let y = str + u.repeat(additionRepeatTimes - 1) + addition + separator;
			return (y.repeat(repeatTimes - 1) + str + u.repeat(additionRepeatTimes - 1) + addition);
		}
		if (string.length === 3 && string[0][0] === 'separator' && string[1][0] === 'addition') {
			let addition = string[1][1];
			return (str + addition);
		}
		if (string.length === 2 && string[0][0] === 'repeatTimes' && string[1][0] === 'addition') {
			console.log(options);
		}
		/*if (string.length === 3 && string[0][0] === 'repeatTimes' && string[1][0] === 'addition' && string[2][0] === 'additionRepeatTimes') {
			let repeatTimes = string[0][1];
			let separator = string[1][1];
			let addition = string[1][1];
			let additionRepeatTimes = string[3][1];
			let additionSeparator = '|';
			let y = str + addition.repeat(additionRepeatTimes) + separator;
			return (y.repeat(repeatTimes - 1) + str + addition.repeat(additionRepeatTimes));
		}*/
	//console.log('repeatTimes' in options);
	/*let obj = options.hasOwnProperty('repeatTimes');
	console.log(obj);
	console.log(options.length);
	/*if (obj === true) {
		//Object.values(options);
		console.log(options[repeatTimes]);
		const key = Object.keys(options).find(key => options[key] === value);
	}*/
};
}
  