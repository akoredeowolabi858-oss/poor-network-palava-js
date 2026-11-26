function checkPerfectNumber(number){


let sum=0;
let counter=1;


while(counter<number){
  if (number%counter==0){
      sum+=counter;     
    }
  counter+=1;
}                     
  if (sum==number){
    return true;
   }
   else{
   return false;
   }




}


console.log(checkPerfectNumber( 18));
