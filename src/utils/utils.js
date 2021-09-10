

const capitalizeAll = (string) => {
	if(string){
		return string.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
	} else {
		return string;
	}
};


export default capitalizeAll;