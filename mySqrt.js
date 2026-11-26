function mySqrt(num){
    for(let count =1; count<num;  count++){
        if (count * count > num){
        return count -1
        }
    }


}




console.log (mySqrt(16));
