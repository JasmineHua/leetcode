/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
     var num = 0; 
     var a=s.split("");
   for(var i in a){
       switch (a[i]) {  
            case 'I': a[i]=1;continue;  
            case 'V': a[i]=5;continue;  
            case 'X': a[i]=10;continue;  
            case 'L': a[i]=50;continue;  
            case 'C': a[i]=100;continue;  
            case 'D': a[i]=500;continue;  
            case 'M': a[i]=1000;continue;  
        }  
   } 
    for(i=0;i<a.length;i++){
       if(a[i]<a[i+1]){
           num-=a[i];
       }
       else{
           num+=a[i];
       }
   }
    return num;
}