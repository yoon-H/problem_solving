function solution(n) {
    var answer = 0;
    
    let arr = [0,1,2];
    
    for(let i=3; i<=n; i++) {
        arr.push((arr[i-1] + arr[i-2])%1234567);
    }
    
    answer = arr[n];
    
    return answer;
}