function solution(sequence, k) {
    var answer = [];
    
    let sums = [0];
    
    sequence.forEach((item, i) => sums.push(item + sums[i]));
    let len = sums.length;
    
    let maxLen = 1000001;
    let startIdx =0;
    let endIdx =1;
    
    while(startIdx <= endIdx && endIdx < len) {
        let item = sums[endIdx] - sums[startIdx];
        
        if(item === k) {
            let curLen = endIdx - startIdx-1;
            if(maxLen > curLen) {
                answer = [startIdx, endIdx-1];
                maxLen = curLen;
            }
        } 
        
        if (item > k) startIdx +=1;
        else endIdx +=1;
    }
    
    return answer;
}