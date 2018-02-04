function findLarger(){
    var x = document.getElementById("x").value; 
    var y = document.getElementById("y").value; 
    document.getElementById("output").innerHTML = x + " == " + y;
    if(x > y) document.getElementById("output").innerHTML = "X is larger";
    if(y > x) document.getElementById("output").innerHTML = "Y is larger";
   
   
}  
/*var findLarger = fibonacci(10);  
document.write(result);*/
  
 