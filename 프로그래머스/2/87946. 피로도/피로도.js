function solution(k, dungeons) {
    var answer = 0;
    
    const len = dungeons.length;
    for(let i=0; i< len ; i++) {
        if(k >= dungeons[i][0]) {
            let arr = [
                ...dungeons.slice(0, i),
                ...dungeons.slice(i+1, len)
            ]; 
            
            const res = solution(k- dungeons[i][1], arr) +1;
            
            if(res > answer) answer = res;
        }
    }
    
    return answer;
}