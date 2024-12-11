function solution(elements) {
    var answer = 0;
    
    let set = new Set();
    const len = elements.length;
    for(let i=0; i<len; i++) {
            let sum =0;
            
            for(let j=i; j<i+len; j++) {
                sum += elements[j%len];
                set.add(sum);
            }
        }
    
    answer = set.size;
    
    return answer;
}