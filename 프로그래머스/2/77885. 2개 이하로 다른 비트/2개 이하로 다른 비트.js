function solution(numbers) {
    var answer = [];
    
    for(const num of numbers) {
        
        const str= '0' + num.toString(2);
        
        const len = str.length;
        
        let idx =0;
        for(let i= len-1; i>=0; i--) {
            if(str[i] == '0') {
                idx = i;
                break;
            }
        }
        
        idx = len -idx;
        
        if(idx <3) answer.push(num +1);
        else {
            const target = parseInt(str.slice(0, len - idx) + '10' + '1'.repeat(idx-2), 2);
            answer.push(target);
        }
        
    }
    
    return answer;
}