function search(n, wires) {
    let visited = Array.from({length : n+1}, () => 0);
    let queue = [];
    queue.push(1);
    visited[1] = 1;
    let cnt =0;
    while(queue.length !== 0) {
        const tower = queue[0];
        queue.shift();
        
        cnt +=1;
        
        for(const item of wires) {
            
            if(item[0] === tower && !visited[item[1]]) {
                queue.push(item[1]);
                visited[item[1]] = 1;
                continue;
            }
            
            if(item[1] === tower && !visited[item[0]]) {
                queue.push(item[0]);
                visited[item[0]] =1;
                continue;
            }
        }
    }
    
    return Math.abs(n-2*cnt);
}

function solution(n, wires) {
    var answer = 101;
    
    const len = wires.length;
    for(let i=0;i<len ; i++) {
        const arr = wires.filter((item, idx) => idx !== i);
        const res = search(n, arr);
        
        if(res === 0) {
            answer = 0;
            break;
        } else if(res< answer) {
            answer = res;
        }
    }
    
    
    return answer;
}