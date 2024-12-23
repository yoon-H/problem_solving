let pieces = '';
let nums = [];
let len =0;
let visited =[];

function search(num, depth)
{
    nums.add(+num);
    if(depth === len) {
        return;
    }
    
    for(let i=0; i<len; i++) {
        if(!visited[i]) {
            visited[i] = true;
            search(num + pieces[i], depth +1);
            visited[i] = false;
        }
    }
}

function solution(numbers) {
    var answer = 0;
    
    len = numbers.length;
        
    pieces = numbers;
    
    nums = new Set();
    
    visited = Array.from({length : len}, () => false);
    
    search('', 0);
    
    for(const item of nums) {
        if(item === 1 || item === 0) continue;
        
        let flag = true;
        for(let i=2; i<= Math.floor(Math.sqrt(item)); i++) {
            if(item % i ===0) {
                flag = false;
                break;
            }
        }
        
        if(flag) answer +=1;
    }
    
    console.log(nums);
    
    
    return answer;
}