function solution(word) {
    var answer = 0;
    
    const letters = ['', 'A', 'E', 'I','O','U'];
    
    const len = word.length;
    for(let i=0; i< len;i++) {
        const idx = letters.indexOf(word[i]);
        
        answer += idx;
        
        let sum = 0;
        for(let j=4-i; j>0; j--) {
            sum += Math.pow(5,j);
        }
        
        answer += sum * (idx-1);
    }
    
    return answer;
}