function solution(priorities, location) {
    var answer = 1;
    
    let idx = 0;
    let len = priorities.length;
    
    let visited = [];
    for(let i=0; i<len ; i++) visited.push(false);
    
    while (answer <= len) {
        let max = -1;
        
        const tmp = idx;
        
        for(let i = tmp; i < tmp + len; i++) {
            const loc = i % len;
            
            if(!visited[loc] &&priorities[loc] > max) {
                    idx = loc;
                    max = priorities[loc];
            }
        }
        
        if(idx === location) break;
        visited[idx] = true;
        answer +=1;
        idx = (idx +1) % len;
        
        console.log(answer, visited, idx, max);
    }
    
    return answer;
}