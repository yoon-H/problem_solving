function solution(picks, minerals) {
    var answer = 0;
    
    // 피로도 정리
    const tiredness = [[1,1,1],[5,1,1],[25,5,1]];
    
    // 광물 길이 곡괭이 개수만큼 자르기
    const total = picks.reduce((acc,item) => acc +item,0);
    if(minerals.length > total *5) minerals = minerals.slice(0, total*5);
    
    // 5개씩 광물 종류 조사
    const len = minerals.length;
    let count = [0,0,0];
    let counts = [];
    for(let i=0; i<len; i++) {        
        switch (minerals[i]) {
            case "diamond" :
                count[0] +=1;
                break;
            case "iron" :
                count[1] +=1;
                break;
            case "stone" :
                count[2] +=1;
                break;
        }
        
        if(i % 5 === 4) {
            counts.push(count);
            count = [0,0,0];
        }
    }
    
    if(len % 5 !== 0) counts.push(count);
    
    // 내림차순 정렬
    counts.sort((a,b) => {
        if(a[0] === b[0]) {
            if(a[1] === b[1]) {
                return b[2] -a[2];
            }
            return b[1] - a[1];
        }
        
        return b[0] - a[0];
    });
    
    // 피로도 총합
    const countsLen = counts.length;
    let idx = 0;
    let pickIdx = 0;
    while(idx < countsLen) {
        if(pickIdx >=3) break;
        if(picks[pickIdx] === 0 ) {
            pickIdx +=1;
            continue;
        }
        
        const count = counts[idx];
        for(let i=0; i<3; i++) {
            answer += tiredness[pickIdx][i] * count[i];
        }
        
        picks[pickIdx] -=1;    
        idx +=1;
    }
    
    return answer;
}