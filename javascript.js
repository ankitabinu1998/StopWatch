
setInterval(myIncr,1000);
let counter=0;


function buttonText(){
    if (document.getElementById("Button").innerHTML==="Start"){
        document.getElementById("Button").innerHTML="Stop";
        
        
     
    }else{
        document.getElementById("Button").innerHTML="Start";
        
    }

}
function myIncr(){
    
    if(document.getElementById("Button").innerHTML==="Stop"){    
        document.getElementById("counter").innerHTML=counter++ +" s";
    }else{
        counter=0;
        document.getElementById("counter").innerHTML=counter +" s";
    }

}





