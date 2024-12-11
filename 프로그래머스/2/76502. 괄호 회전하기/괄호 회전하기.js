function solution(s) {
    var answer = 0;
    
    const start = ['[','(','{'];
    const end = [']',')','}'];
    
    const len = s.length;
    for(let i =0; i<len; i++) {
        
        const tmpStr = s.slice(i) + s.slice(0, i);
        
        let flag = true; 
        let arr = [];

        for(const item of tmpStr) {
            if(start.includes(item)) arr.push(item);
            else {
                const idx = end.indexOf(item);

                if(arr.pop() !== start[idx]) {
                    flag = false;
                    break;
                }
            }
        }
        
        if(flag && arr.length ===0) answer +=1;
    }
    
    return answer;
}