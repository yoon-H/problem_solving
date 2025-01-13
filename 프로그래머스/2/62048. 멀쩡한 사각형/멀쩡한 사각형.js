function solution(w, h) {
    var answer = BigInt(0);
    
    const slope = h/w;
    
    for(let i=1; i< w; i++) {
        let cur = i*h /w;
        
        answer += BigInt(Math.floor(cur));   
    }
    
    answer *=BigInt(2);
    
    return answer;
}