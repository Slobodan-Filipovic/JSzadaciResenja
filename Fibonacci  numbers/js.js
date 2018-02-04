function fibonacci(n)  { 
    var niz = [0,1];
    for(var i = 2; i < n; i++)
    {
        niz.push(niz[i - 1] + niz[i - 2]);
    }
    return niz;  
}  
var result = fibonacci(10);  
document.write(result);
