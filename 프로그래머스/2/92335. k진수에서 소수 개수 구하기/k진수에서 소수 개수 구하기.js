function changeNum(num, base) {
    let res ='';
    
    num = parseInt(num);
    
    while(num > 0) {
        res = num % base + res;
        
        num = Math.floor(num/base);
    }
    
    return res;
}

function solution(n, k) {
    var answer = 0;
    
    const num = changeNum(n, k);
    
    let nums = [];
    let tmp = '';
    for(const item of num) {
        if(item === '0') {
            if(tmp !== '') {
                nums.push(parseInt(tmp));
                tmp = '';
            }
            continue;
        }
        
        tmp += item;
    }
    
    if(tmp !== '') nums.push(parseInt(tmp));
    
    for(const item of nums) {
        
        if(item === 1) continue;
        
        let flag = true;
        const len = Math.sqrt(item,2);
        for(let i = 2; i<=len; i++ ) {
            if(item % i === 0) {
                flag = false;
                break;
            }
        }
        
        if(flag) answer +=1;
    }
    
    
    
    return answer;
}