function solution(weights) {
    var answer = 0;
    
    let counts = {};
    
    weights.sort((a,b) => a-b);
    
    weights.forEach((weight) => {
        if(!counts[weight]) counts[weight] = 1;
        else counts[weight] +=1;
    })
    
    for(let weight in counts) {
        const num = counts[weight];
        answer += num * (num -1) / 2;
        
        if(counts[weight*2]&& counts[weight*2]) answer += num * counts[weight*2];
        if(counts[weight*3/2] >0) answer += num * counts[weight*3/2];
        if(counts[weight*4/3] > 0) answer += num * counts[weight*4/3];
    }
    return answer;
}