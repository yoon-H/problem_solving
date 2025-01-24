function solution(n, k, enemy) {
    var answer = 0;
    
    let start = 0;
    let end = enemy.length;
    
    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        let cnt = k;
        let num = n;
        
        let tmp = enemy.slice(0, mid);
        tmp.sort((a,b) => a-b);
        
        for(let i =0; i<mid; i++) {
            // 일단 병사를 모두 소모하기
            if(num >= tmp[i]) num -= tmp[i];
            else{
                // mid 까지 남은 무적권 모두 사용
                cnt -= mid-i;
                break;
            }
        }
        
        if(cnt >=0) {
            // 무적권이 남았으면 더 많은 라운드를 갈 수 있으므로 start를 늘려 mid를 늘리기
            if(answer < mid) {
                answer = mid;
            }
            start = mid+1;
        }
        else {
            // 무적권이 부족하면 mid 줄이기
            end = mid-1;
        }
    }
    
    return answer;
}