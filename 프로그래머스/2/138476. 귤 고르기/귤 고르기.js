function solution(k, tangerine) {
    var answer = 0;
    
    let amount = {};
    
    for(const item of tangerine) {
        if(amount[item])amount[item] +=1;
        else amount[item] = 1;
    }
    
    let result = [];
    
    for(const key in amount) {
        result.push([key, amount[key]]);
    }
    
    result.sort((a,b) => {
        return b[1] - a[1];
    })
    
    for(const item of result) {   
        if(item[1] >= k) {
            answer +=1;
            break;
        } else{
            k -= item[1];
            answer +=1;
        }
    }
    
    
    
    return answer;
}