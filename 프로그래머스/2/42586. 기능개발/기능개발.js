function solution(progresses, speeds) {
    var answer = [];
    
    let cnt = 0;
    let prev = -1;
    for(const idx in progresses) {
        const left = 100- progresses[idx];
        
        const days = Math.ceil(left / speeds[idx]);
        
        if(prev === -1) {
            cnt +=1;
            prev = days;
        } else {
            if(days > prev) {
                answer.push(cnt);
                prev = days;
                cnt =1;
            } else {
                cnt +=1;
            }
        }        
    }
    
    answer.push(cnt);
    
    return answer;
}