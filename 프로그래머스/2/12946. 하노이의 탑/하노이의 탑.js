function hanoi(answer , n, from , to , by) {
    if(n===0) return;
    hanoi(answer, n-1, from , by , to);
    answer.push([from, to]);
    hanoi(answer, n-1, by, to, from);
}

function solution(n) {
    var answer = [];
    
    hanoi(answer, n, 1, 3, 2);
    
    return answer;
}