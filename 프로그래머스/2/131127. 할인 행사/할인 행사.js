function solution(want, number, discount) {
    var answer = 0;
    
    const sum = number.reduce((acc, item) => acc + item);
    const len  =discount.length;
    
    for(let key = 0; key <= len - sum; key++) {
        let arr = number.map((item, idx) => item);
        let flag = true;
        
        for(let i = key; i<sum + key; i++) {
            const item = discount[i];
            const idx = want.indexOf(item);
            
            if(idx === -1) {
                flag = false;
                break;
            }
            
            if(arr[idx] <= 0) {
                flag = false;
                break;
            } else {
                arr[idx] -=1;
            }
            
            
        }
        
        if(flag) answer +=1;
    }
    
    return answer;
}