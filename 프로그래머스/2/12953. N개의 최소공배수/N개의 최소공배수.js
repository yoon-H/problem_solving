function solution(arr) {
    var answer = 0;
    
    const len = arr.length;
    
    answer = arr[0];
    
    for(let i =1; i<len ; i++ ) {
        const tmp = arr[i];
        
        //최소 공배수 구하기
        const cases = Math.min(answer, tmp);
        let num1 = answer;
        let num2 = tmp;
        
        for(let i=2; i<=cases; i++) {
            while(num1 %i ===0 && num2 %i ===0) {
                num1 /=i;
                num2 /=i;
            }
        }
        
        answer = num1*tmp;
        
    }
    
    
    return answer;
}