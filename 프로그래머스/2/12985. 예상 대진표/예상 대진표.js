function solution(n,a,b)
{
    var answer = 1;

    while(true) {
        
        if(Math.abs(a-b) === 1 && Math.min(a,b) %2 === 1) break;
        
        if(a%2 === 0) a/=2;
        else a= Math.floor(a/2)+ 1;
        
        if(b%2 === 0) b/=2;
        else b= Math.floor(b/2)+ 1;
        
        answer +=1;
    } 

    return answer;
}