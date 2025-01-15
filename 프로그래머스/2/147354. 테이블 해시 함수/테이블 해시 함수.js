function solution(data, col, row_begin, row_end) {
    var answer = -1;
    
    // 정렬
    data.sort((a,b) => {
        if( a[col-1] === b[col-1]) return b[0] - a[0];
        return a[col-1] - b[col-1];
    })
    const len = data[0].length;
    
    for(let i= row_begin-1; i<= row_end-1; i++) {
        let s =0;
        for(const item of data[i]) {
            s += item % (i+1);
        }
        
        if(answer === -1) answer = s;
        else answer = answer^s;
        
    }
    
    return answer;
}