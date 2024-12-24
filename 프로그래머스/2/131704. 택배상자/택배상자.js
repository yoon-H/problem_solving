function solution(order) {
    var answer = 0;
    
    const len = order.length;
    let main = Array.from({length : len}, (v,i) => i+1);
    main.sort((a,b) => b-a);
    let sub = [];
    let idx =main.length -1;
    
    for(const item of order) {
        
        
        if(main.length === 0 || main[idx] > item) {
            if(sub[sub.length -1] === item) {
                sub.pop();
                answer +=1;
                continue;
            } else break;
        }
        
        while(main[idx] < item) {
            sub.push(main[idx]);
            main.pop();
            idx -=1;
        }
        
        if(main[idx] === item) {
            answer +=1;
            idx -=1;
            main.pop();
        } else break;
    }
    
    return answer;
}