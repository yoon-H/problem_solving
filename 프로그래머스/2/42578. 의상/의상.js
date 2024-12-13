function solution(clothes) {
    var answer = 0;
    
    let obj = {};
    
    for(const item of clothes) {
        if(obj[item[1]]) obj[item[1]] +=1;
        else obj[item[1]] = 1;
    }
    
    let total = 1;
    
    for(const key in obj) {
        total *= obj[key] +1;
    }
    
    answer = total -1;
    
    return answer;
}