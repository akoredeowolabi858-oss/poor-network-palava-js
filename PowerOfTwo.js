function isPowerOfTwo(number){

for(let count =1; count<= number; count++){
	result = count**2;
	if (result == number){
	return true;

}
	
}

}
console.log(isPowerOfTwo(13));
