function factorial(x)  {  
    
    if (x === 0) {  
        return 1;
    }          
    else{
        return x * factorial(x - 1);
    }  
} 
var result = factorial(5);  
document.write(result);  
 