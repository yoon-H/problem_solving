function check(cur, target)
{
    let cnt =0;
    
    for(let i=0; i<cur.length; i++) {
        if(cur[i] != target[i]) cnt +=1;
    }
    
    return cnt;
}

function solution(begin, target, words) {
    let answer = 0;
    
    if(!words.includes(target)) return 0;
    
    const queue = [];
    const visited = Array(target.length).fill(false);
    
    queue.push([begin, 0]);

    const idx = words.indexOf(begin);
    
    if(idx !== -1) visited[idx] = true;
    
    // 1. bfs
    while(queue.length !== 0) {
        const item = queue[0][0];
        const cnt = queue[0][1];
        queue.splice(0,1);
        
        if(item === target) {
            answer = cnt;
            break;
        }
        
        // 2. 단어들 순회
        for(let i=0; i<words.length; i++) {
            // 3. 방문한 단어 건너뛰기
    
            if(visited[i]) continue;
            
            // 4. 한 단어만 다른지 확인하기
            if(check(item, words[i]) !== 1) continue;
            
            queue.push([words[i], cnt+1]);
            visited[i] = true;
            
        }
        
        answer +=1;
        
    }
    
    return answer;
}