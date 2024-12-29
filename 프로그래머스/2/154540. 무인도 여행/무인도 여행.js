let visited;
let dx = [1,-1,0,0];
let dy = [0,0,1,-1];

let answer =[];


function search(x,y, maps, len, col) {
    let queue = [[x,y]];
    let cnt = 0;
    visited[x][y] = true;
    while(queue.length !== 0) {
        const curX = queue[0][0];
        const curY = queue[0][1];
        
        cnt += +maps[curX][curY];
        
        queue.shift();
        
        for(let i=0; i<4; i++) {
            const newX = curX + dx[i];
            const newY = curY + dy[i];
            
            if(newX >=0 && newX < len && newY >=0 && newY <col) {
                if(maps[newX][newY] !== 'X' && !visited[newX][newY]) {
                    queue.push([newX, newY]);
                
                    visited[newX][newY] = true;
                }
            }
            
        }
    }
    
    answer.push(cnt);
    
}

function solution(maps) {
    
    const len = maps.length;
    const col = maps[0].length;
    
    visited  = Array.from({length : len}, () => Array.from({length : col}, () => false));
    
    for(let i=0; i<len ; i++) {
        for(let j=0; j<col ; j++) {
            if(maps[i][j] !== 'X' && visited[i][j] === false) {
                search(i,j, maps, len, col);
            }
        }
    }
    
    if(answer.length === 0) answer.push(-1);
    else answer.sort((a,b) => a-b);
    
    return answer;
}