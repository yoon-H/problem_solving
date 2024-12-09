function solution(n) {
    var answer = 0;
    
    let arr= [0, 1];
    
    for(let i=2; i<=n; i++) {
        const res = (arr[i-1] + arr[i-2]) %1234567;
        
        arr.push(res);
    }
    
    answer = arr[n];
    
    
    return answer;
}