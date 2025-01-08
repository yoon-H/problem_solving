function solution(storey) {
    var answer = 0;
    let num = [];
    let len =0;
    
    while(storey >0) {
        num.push(storey % 10);
        
        storey = Math.floor(storey/ 10);
        len +=1;
    }
    
    num.push(0);
    
    for(let i=0; i<=len; i++) {
        if(num[i] >=10) {
            num[i+1] +=1;
            num[i] -= 10;
        }
        
        let tmp = num[i];
        
        if(tmp ===0) continue;
        if(tmp === 5) {
            if(i >= len-1) {
                num[i] = 0;
                answer += tmp;
                break;
            } 

            if(num[i+1] >=5) {
                tmp = 10 - tmp;
                num[i] = 0;
                num[i+1] +=1;
                answer += tmp;
            } else {
                num[i] = 0;
                answer += tmp;
            }
        } else if (tmp > 5) {
            tmp = 10 - tmp;
            num[i] = 0;
            num[i+1] +=1;
            answer += tmp;
        }
        else {
            num[i] = 0;
            answer += tmp;
        }
    }
    
    return answer;
}