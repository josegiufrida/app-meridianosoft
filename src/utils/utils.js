

const capitalizeAll = (string) => {
	if(string){
		return string.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
	} else {
		return string;
	}
};


const roundNumber = (number) => {

	// Check if numeric
	if(isNaN(number)){
		return number;
	}

	number = parseFloat(number);

	// Check if number have decimals
	if(number % 1 != 0){
		return number.toFixed(2);	// return fixed 2 decimals
	} else {
		return number;  // If not have decimals return
	}

};


export { capitalizeAll, roundNumber };