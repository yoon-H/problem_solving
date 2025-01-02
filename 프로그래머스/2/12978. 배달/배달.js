function solution(N, road, K) {
    var answer = 0;
    
    let times = Array.from({length: N+1}, () => new Map());
    let dist = Array.from({length: N+1}, () => -1);
    dist[1] = 0;
    for(const item of road) {
        const [start, end, len] = item;
        
        if(times[start].has(end)) {
            if(times[start].get(end) > len) {
                times[start].set(end,len);
            }
        } else times[start].set(end,len);
        
        if(times[end].has(start)) {
            if(times[end].get(start) > len) {
                times[end].set(start, len);
            }
        } else times[end].set(start, len);
    }
    
    let queue =[];
    let visited = Array.from({length: N+1}, () => false);
    
    for(const item of times[1]) {
        queue.push(item[0]);
        dist[item[0]] = item[1];
    }
    
    visited[1] = true;
    queue.sort((a,b) => b[1] - a[1]);
    
    while(queue.length !== 0) {
        const item = queue[queue.length-1];
        queue.pop();
        
        const cur = dist[item];
        
        const map = times[item];
        
        map.forEach((value, key, mapObj) => {
            const tmp = cur + value;
            if(dist[key] === -1 || tmp < dist[key]) {
                dist[key] = tmp;
                queue.push(key);
            }
        });
        
        queue.sort((a,b) => b[1]- a[1]);
        
    }
    
    for(let i=1; i<=N; i++) {
        if(dist[i] <= K) answer +=1;
    }
    

    return answer;
}