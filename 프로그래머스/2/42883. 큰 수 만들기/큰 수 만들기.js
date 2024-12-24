// 풀이 보고 작성
function solution(number, k) {
    
    const len = number.length;
    
    let answer = '';
    let startIdx = 0;
    let maxValue = '';
    let maxIdx = '';
    
    for(let i=len -k; i>0; i--) {
        maxValue = '0';
        
        for(let j= startIdx; j <= len -i; j++) {
            if(number[j] > maxValue) {
                maxIdx = j;
                maxValue = number[j];
                if(maxValue == '9') break;
            }
        }
        
        answer += maxValue;
        startIdx = maxIdx +1;
    }
    
    return answer;
}