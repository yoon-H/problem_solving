function solution(numbers) {
    var answer = '';
    
    nums = numbers.sort((a,b) => {
        str1 = a.toString() + b.toString();
        str2 = b.toString() + a.toString();
        if(str1<str2) return 1;
        else if (str1>str2) return -1;
        else 0;
    });
    
    answer = nums.reduce((acc, idx) => acc + idx,'')
    
    if(parseInt(answer) === 0) return '0';
    
    return answer;
}