function isHappy(number){
let sum = 0;
	for (count = 1; count <= 1000; count++){
	number = String(number)
	for (value of number){
		value = Number(value);
		square = value * value;
		sum += square;
	}
	if (sum === 1){
		return true;
	}
	number = sum;
	}
	return false;
	
}

console.log(isHappy(19));
