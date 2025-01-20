let exit =[];
let lever = [];
let start = [];
let rows = 0;
let cols = 0;

const dx = [1,-1,0,0];
const dy = [0,0,1,-1];

function search(maps, first, last) {
    let flag =false;
    let queue = [];
    let visited = Array.from({length : rows}, () => Array.from({length : cols}, () => false));
    
    queue.push([...first, 0]);
    visited[first[0]][first[1]] = true;
    
    // 최단 경로 찾기
    while(queue.length !== 0) {
        const x = queue[0][0];
        const y = queue[0][1];
        const cnt = queue[0][2];
        
        queue.shift();
        
        if(x === last[0] && y === last[1]) return cnt;
        
        
        for(let i=0; i<4; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];
            
            if(newX >=0 && newX < rows && newY >=0 && newY < cols) {
                if(!visited[newX][newY] && maps[newX][newY] !== 'X') {
                    queue.push([newX, newY, cnt +1]);
                    visited[newX][newY] = true;
                }
            }
        }
        
    }
    
    return -1;
}


function solution(maps) {
    var answer = 0;
    
    rows = maps.length;
    cols = maps[0].length;
    
    // 출구, 시작 위치, 레버 위치 저장
    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++)  {
            switch(maps[i][j]) {
                case 'S':
                    start = [i,j];
                    break;
                case 'E' :
                    exit = [i,j];
                    break;
                case 'L':
                    lever = [i,j];
                    break;
            }
        }
    }
    
    // 시작 지점부터 레버까지
    const res1 = search(maps, start, lever);
    if(res1 === -1) return -1;
    else answer += res1;
    
    // 레버부터 출구까지
    const res2 = search(maps, lever, exit);
    if(res2 === -1) return -1;
    else answer += res2;
    
    return answer;
}