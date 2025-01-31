function solution(r1, r2) {
    var answer = 0;
    
    const r1Pow = r1*r1;
    const r2Pow = r2*r2;
    
    
    for(let i=1; i<=r2; i++) {
        
        const xPow = i*i;
        
        const y2 = Math.floor(Math.sqrt(r2Pow - xPow));
        
        let y1;
        
        y1 = Math.ceil(Math.sqrt(r1Pow - xPow));
        
        if(i > r1) y1 = 0;
        
        if(y2 < y1) continue;
        
        answer += y2 - y1 + 1;
    }
    
    answer *= 4 ;
    
    return answer;
}