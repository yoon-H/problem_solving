function solution(x, y, n) {
    var answer = -1;
    
    let queue = [[y, 0]];
    
    while(queue.length !== 0) {
        const item = queue[0];
        const num = item[0];
        const depth = item[1];
        queue.shift();
        
        if(x === num) return depth;
        
        if(num %3 === 0) {
            const tmp = num / 3;
            if(tmp > 0) queue.push([tmp, depth+1]);
        }
        
        if(num %2 === 0) {
            const tmp = num / 2;
            if(tmp > 0) queue.push([tmp, depth+1]);
        }
        
        if(num - n > 0) {
            queue.push([num-n, depth+1]);
        }
        
    }
    
    
    return answer;
}