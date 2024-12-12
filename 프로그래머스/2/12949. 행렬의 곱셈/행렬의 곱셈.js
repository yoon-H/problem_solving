function solution(arr1, arr2) {
    var answer = [];
    
    const col = arr1.length;
    const row = arr2[0].length;
    const len = arr1[0].length;
    
    for(let i= 0; i<col; i++) {
        let arr = [];
        
        for(let j=0; j<row; j++) {
            let num =0;
            for(let k=0; k<len; k++) {
                num += arr1[i][k] * arr2[k][j];
            }
            arr.push(num);
        }
        answer.push(arr);
    }
    
    return answer;
}