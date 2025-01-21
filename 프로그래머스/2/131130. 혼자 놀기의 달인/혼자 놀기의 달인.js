function solution(cards) {
    var answer = 0;
    
    const len = cards.length;
    let visited = Array.from({length : len}, () => false);
    let counts = [];
    
    for(let i=0; i<len; i++) {
        let idx = i;
        let cnt = 0;
        
        while(!visited[idx]) {
            visited[idx] = true;
            cnt +=1;
            const box = cards[idx];
            
            idx = box-1;
        }
        
        if(cnt !== 0) counts.push(cnt);
    }
    
    if(counts.length === 1) return 0;
    
    counts.sort((a,b) => b-a);
    
    answer = counts[0] * counts[1];    
    
    return answer;
}