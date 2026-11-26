function hammingWeight(number) {
let binarycounter = 0;
let finalNumber = 0;
while (number > 0 ) {
    let num = number % 2;
    binarycounter += num;
    number = number/2;
    number = Math.floor(number);
    }
    return binarycounter;
    }
    

console.log(hammingWeight(11));
