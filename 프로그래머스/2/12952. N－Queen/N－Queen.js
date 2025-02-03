let answer = 0;
let width;

function checkTile(arr, idx) {
    let nums = Array.from({length : width}, (n, i) => i );
    
    // 같은 행 삭제
    for(let i=0; i<idx; i++) {
        nums = nums.filter((e) => e !== arr[i]);
    }
    
    // 대각선 삭제
    nums = nums.filter((e) => {
        let flag = false;
        
        for(let i=0; i<idx; i++) {
            const dy = Math.abs(e - arr[i]);
            const dx = Math.abs(idx - i);
            
            if(dy === dx) flag = true;
            
            if(flag) break;
        }
        
        if(flag) return false;
        else return true;
    });
    
    return nums;
}

function search(arr, idx) {
    
    if(idx >= width) {
        answer +=1;
        return;
    }else if (idx === 0) {
        for(let i=0; i<width; i++) {
            arr[0] = i;
            search(arr, idx + 1);
        }
    }else {
        // 가능한 위치 찾기
        const nums = checkTile(arr, idx);
        
        if(nums.length === 0) return;
        
        for(const num of nums) {
            
            arr[idx] = num;
            search(arr, idx + 1);
        }
    }
}



function solution(n) {
    
    width = n;
    
    let array = Array.from({length : n}, () => -1);
    
    search(array, 0);
    
    return answer;
}