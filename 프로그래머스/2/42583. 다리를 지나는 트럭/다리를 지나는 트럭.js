function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    let queue = new Array(bridge_length).fill(0);
    let curWeight =0;
    
    for(const item of truck_weights) {
        
        curWeight += item;
        
        if(curWeight <= weight) {
            curWeight -= queue.shift();
            queue.push(item);
            answer +=1;
            continue;
        }
        
        while(curWeight > weight) {
            
            curWeight -= queue.shift();
            queue.push(0);
            
            answer +=1;
        }
        
        queue[bridge_length -1] = item;
        
    }
    
    answer += bridge_length;
    
    return answer;
}