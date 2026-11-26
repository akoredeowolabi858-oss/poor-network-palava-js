function fizzBuzz(num){
    num = String(num);
	if (num%3 == 0 && num%5 == 0){
		console.log("fizzbuzz");
	}
	if (num%3 == 0 ){
		console.log("fizz");
		}
	if (num%5 == 0){
		console.log("buzz");
		}
}

fizzBuzz(6);
