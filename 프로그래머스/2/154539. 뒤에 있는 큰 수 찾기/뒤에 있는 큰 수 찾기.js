function solution(numbers) {
    const len = numbers.length;
    var answer = Array.from({length :len}, () => -1);
    
    let arr = [];
    
    for(let i=0; i<len; i++) {
        
        while(arr.length !== 0) {
            if(numbers[arr[arr.length-1]] >= numbers[i]) break;
            else {
                answer[arr[arr.length-1]] = numbers[i];
                arr.pop();
            }
        }
        
        arr.push(i);
    }
    
    return answer;
}