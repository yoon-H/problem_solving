let res = Infinity;

function changeLetter(letter) {
    const num = letter.charCodeAt() - 65; // letter - 'A'
    
    if(num > 13) return 26 - num;
    else return num;
}

function search (arr, letters, idx, len, answer) {
    if(letters.length === 0) {
        if(res > answer) res = answer;
        return;
    }
    
    const front = letters[0] + len - idx;
    const back = idx - letters[letters.length-1];
    
    // 다 탐색하기
    {
        const value = letters[0];
        const loc = value + len;
        
        const idxs = letters.filter((e, i) => i !== 0);
        
        search(arr, idxs, loc, len, answer + front + arr[loc]);
    }    
    
    {
        const lastIdx = letters.length -1;
        
        const loc = letters[lastIdx];
        
        const idxs = letters.filter((e, i) => i !== lastIdx);
        search(arr, idxs, loc, len, answer + back + arr[loc]);
    }
}

function solution(name) {
    
    const len = name.length;
    let letters = [];
    let arr = Array.from({length : len * 2 + 1 }, () => 0);
    
    for(let i=0; i<len ;i++) {
        if(name[i] !== 'A') {
            letters.push(i);
            
            const num = changeLetter(name[i]);
            
            arr[i] = num;
            arr[i+len] = num; // 길이를 2배로 만들어서 저장
        }
    }
    
    let idx = len;
    
    console.log(arr);
    
    search(arr,letters, idx, len, 0);
    
    return res;
}