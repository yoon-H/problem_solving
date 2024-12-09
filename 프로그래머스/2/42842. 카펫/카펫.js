function solution(brown, yellow) {
    var answer = [];
    
    const area = brown + yellow;
    const len = Math.floor(Math.sqrt(area));
    const total = (brown +4) / 2;
    
    for(let i = 1 ; i<= len ; i++ ) {
        if(area% i === 0) {
            const tmp = area / i;
            
            if(tmp + i === total) {
                answer.push(tmp);
                answer.push(i);
                break;
            }
        }
        
    }
    
    return answer;
}