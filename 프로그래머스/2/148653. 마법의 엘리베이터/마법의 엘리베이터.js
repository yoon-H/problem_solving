function solution(storey) {
    var answer = 0;
    let num = [];
    let len =0;
    
    // 배열에 숫자 분할
    while(storey >0) {
        num.push(storey % 10);
        
        storey = Math.floor(storey/ 10);
        len +=1;
    }
    
    // 올림으로 자릿수가 늘어날 수 있으니 0 추가
    num.push(0);
    
    for(let i=0; i<=len; i++) {
        // 만약 이전 인덱스에서 올림해서 10을 넘어가면 올려주기
        if(num[i] >=10) {
            num[i+1] +=1;
            num[i] -= 10;
        }
        
        let tmp = num[i];
        
        // 0이면 패스
        if(tmp ===0) continue;
        
        // 5일 때 분기점
        if(tmp === 5) {
            // 마지막 자릿수의 5면 버림
            if(i >= len-1) {
                num[i] = 0;
                answer += tmp;
                break;
            } 
            
            // 5일 때 위의 자리가 5이상이면 올림, 아니면 내림
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