let total = 0;

function dfs(numbers,  target, sum, idx) {
    if(idx === numbers.length ) {
        if(sum === target) total +=1;
        return;
    }
    
    dfs(numbers, target, sum + numbers[idx], idx+1);
    dfs(numbers, target, sum - numbers[idx], idx+1);
}

function solution(numbers, target) {
    var answer = 0;
    
    dfs(numbers, target, -numbers[0] , 1);
    dfs(numbers, target, numbers[0] , 1);
    
    answer = total;
    
    return answer;
}