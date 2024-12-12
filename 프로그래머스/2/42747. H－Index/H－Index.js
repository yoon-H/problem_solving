function solution(citations) {
    var answer = 0;
    
    citations.sort((a,b) => a-b);
    
    const len = citations.length;
    for(const idx in citations) {
        // 남은 개수 구하고
        const item = citations[idx];
        const cnt = len-idx;
        
        // 현재 위치 값이 개수보다 크거나 같으면 기록
        if(item >= cnt) {
            if(cnt > answer) answer = cnt;
        }
    }
    
    return answer;
}