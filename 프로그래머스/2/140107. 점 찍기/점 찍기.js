function solution(k, d) {
    var answer = 0;
    
    const max = Math.pow(d,2);
    
    for(let i=0;i<=d; i+= k) {
        const y = Math.sqrt(max - Math.pow(i,2));
        answer += Math.floor(y/k) +1;
    }
    
    return answer;
}