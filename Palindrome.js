function isPalindrome(num){
let number = num;
let reverse = 0;
                while (num>0){
                        reverse = reverse*10 + num%10;
                        num=num/10;
                        num = Math.floor(num);
                }
                if (reverse == number){
                return  true;

                }
                else {
                return false;
                }

}
console.log(isPalindrome(121));

