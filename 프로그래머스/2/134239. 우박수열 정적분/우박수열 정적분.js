function solution(k, ranges) {
    var answer = [];
    
    let value = [k];
    let area = [];
    
    while(k !== 1) {
        // 우박 수열 계산
        if(k % 2 ==0) {
            k /=2;
        }
        else {
            k = k*3+1;
        }
        
        // 정적분 계산
        const prev = value[value.length-1];
        value.push(k);
        
        let num = Math.abs(prev - k) / 2;
        num += Math.min(prev, k);
        
        area.push(num);
    }
    const len = value.length;
    
    for(let [start, end] of ranges) {
        
        const last = len-1+end;
        
        if(last < 0 || start > last) {
            answer.push(-1);
            continue;
        }
        
        if(start === last) {
            answer.push(0.0);
            continue;
        }
        
        let total = 0;
        for(let i= start; i<=last-1; i++) {
            total += area[i];
        }
        
        answer.push(total);
    }
    
    return answer;
}