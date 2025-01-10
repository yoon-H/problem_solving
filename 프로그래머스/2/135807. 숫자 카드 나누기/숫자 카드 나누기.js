function check(arr, num) {
    let cnt =0;
    
    arr.forEach((item) => {
        if(item % num === 0) cnt +=1;
    })
    
    
    return cnt;
}

function solution(arrayA, arrayB) {
    var answer = 0;
    const minA = arrayA.sort((a,b) => a-b)[0];
    const minB = arrayB.sort((a,b) => a-b)[0];
    const min = Math.max(minA,minB);
    
    // 최솟값의 약수 찾기
    let divsA = [];
    for(let i = minA; i>=2; i--) {
        if(minA % i === 0) divsA.push(i);
    }
    
    let divsB = [];
    for(let i = minB; i>=2; i--) {
        if(minB % i ===0) divsB.push(i);
    }
    
    let divA =0;
    for(const num of divsA) {
        if(check(arrayA, num) === arrayA.length) {
            if(num > divA) divA = num;
        }
    }
    
    let divB =0;
    for(const num of divsB) {
        if(check(arrayB, num) === arrayB.length) {
            if(num > divB) divB = num;
        }
    }
    
    
    if(divA > 0 && check(arrayB, divA) === 0) answer = divA;
    if(divB > 0 && check(arrayA, divB) === 0) {
        if(divB > answer) answer = divB;
    }
    
    return answer;
}