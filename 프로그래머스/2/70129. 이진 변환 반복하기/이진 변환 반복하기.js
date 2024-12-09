function solution(s) {
    var answer = [0,0];
    
    while(s !== '1') {
        const len = s.length;
        let cnt =0;
        
        for(const char of s) {
            if(char === '0') {
                cnt +=1;
            }
        }
        
        answer[1] += cnt;
        
        s = '1'.repeat(len - cnt);
        
        //이진 변환
        const int = s.length;
            
        s = int.toString(2);
            
        answer[0] +=1;
    }
    
    return answer;
}