(function(){
   var speed = 10,
      
       //code to understand basics of setting timers
       // i = 0,
      /* doSomething = function (){
           console.log("Function executed " +(i + 1)+ " times");
           i = i + 1;
           
           if(i<10){
               setTimeout(doSomething, speed);  
           }
       };
   
   var timer = setTimeout(doSomething, speed); */
       
      /* doSomething = function(){
         console.log("Function executed " +(i + 1)+ " times");
           
           i = i + 1;
           if(i > 9){
               clearTimeout(timer);
           }
       };
       
    var timer = setInterval(doSomething, speed); */
       
       moveBox = function(moveBy){
         var box = document.getElementById("box"),
             left = box.offsetLeft;
           
         if((moveBy > 0 && left > 399) || (moveBy < 0 && left < 51)){
             clearInterval(boxTimer);
             boxTimer = setInterval(function(){
                 moveBox(moveBy * -1);
             }, speed);
         }
           
          box.style.left = left + moveBy + "px";   
        
       };
       
    var boxTimer = setInterval(function(){
        moveBox(3);
    }, speed);
    
}());