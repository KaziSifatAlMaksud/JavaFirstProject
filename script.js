'use script'
const number = Math.trunc(Math.random()*20)+1;

document.querySelector('.gess').textContent = number;
let score = document.querySelector('.score').textContent;
let hightscore = document.querySelector('.hight').textContent ;
document.querySelector('.agin').addEventListener('click',function(){
    document.querySelector('.message').textContent =  "Enter Any value...";
    const number =  Math.trunc(Math.random()*20)+1;
    console.log(number);
    document.querySelector('.gess').textContent = number;
     score = Number('20');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor="gray";


    document.querySelector('.cheack').addEventListener('click',function(){
        const gass = document.querySelector('.input').value;
         
     
        if(score>1){
     
        if(!gass){
            document.querySelector('.message').textContent =  "Please Enter Valled Value !";
            score--;
            document.querySelector('.score').textContent = score;
           
        }
        else if(gass==number){
         document.querySelector('.message').textContent =  " Conratulations You are Win";
         document.querySelector('.gess').textContent = number;
         document.querySelector('body').style.backgroundColor="green";
         document.querySelector('.gess').style.width = "15%";
         document.querySelector('.score').textContent = score;
         if(Number(hightscore)< Number(score)){
             hightscore = score;
             document.querySelector('.hight').textContent = hightscore;
         }
     }
        else if(gass>number){
         document.querySelector('.message').textContent =  "Numbe is Too High";
         score--;
         document.querySelector('.score').textContent = score;
        }
        else if (gass<number){
         document.querySelector('.message').textContent =  "Numbe is Too low";
         score--;
         document.querySelector('.score').textContent = score;
        }
     }else{
         score--;
         document.querySelector('.message').textContent =  "Game over!";
         document.querySelector('.score').textContent = score;
         
     }
     });

});

document.querySelector('.cheack').addEventListener('click',function(){
   const gass = document.querySelector('.input').value;
    

   if(score>1){

   if(!gass){
       document.querySelector('.message').textContent =  "Please Enter Valled Value !";
       score--;
       document.querySelector('.score').textContent = score;
      
   }
   else if(gass==number){
    document.querySelector('.message').textContent =  " Conratulations You are Win";
    document.querySelector('.gess').textContent = number;
    document.querySelector('body').style.backgroundColor="green";
    document.querySelector('.gess').style.width = "15%";
    document.querySelector('.score').textContent = score;
    if(Number(hightscore)< Number(score)){
        hightscore = score;
        document.querySelector('.hight').textContent = hightscore;

    }
}
   else if(gass>number){
    document.querySelector('.message').textContent =  "Numbe is Too High";
    score--;
    document.querySelector('.score').textContent = score;
   }
   else if (gass<number){
    document.querySelector('.message').textContent =  "Numbe is Too low";
    score--;
    document.querySelector('.score').textContent = score;
   }
}else{
    score--;
    document.querySelector('.message').textContent =  "Game over!";
    document.querySelector('.score').textContent = score;
    
}
});
