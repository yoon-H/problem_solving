function search(board,rows, cols, start, end) {
    let visited = Array.from({length: rows}, () => Array.from({length: cols}, () => false));
    let queue = [];
    
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1];
    
    queue.push([...start, 0]);
    visited[start[0]][start[1]] = true;
    
    while(queue.length >0) {
        const [x,y,cnt] = queue[0];
        queue.shift();
        
        if(x === end[0] && y === end[1]) return cnt;
        
        for(let i =0; i<4; i++) {
            let newX = x + dx[i];
            let newY = y + dy[i];
            
            while(newX >=0 && newX < rows && newY >=0 && newY < cols) {
                if(board[newX][newY] === 'D') break;
                
                newX += dx[i];
                newY += dy[i];
            }
            
            const prevX = newX - dx[i];
            const prevY = newY - dy[i];
            
            if(!visited[prevX][prevY]) {
                queue.push([prevX, prevY, cnt+1]);
                visited[prevX][prevY] = true;
            }
            
        }
    }
    
    return -1;                       
}

function solution(board) {
    var answer = 0;
    
    let rows = board.length;
    let cols = board[0].length;
    
    let start = [];
    let end = [];
    
    let flag = false;
    for(let i =0; i<rows; i++) {
        if(flag) break;
        for(let j=0; j<cols; j++) {
            if(start.length !== 0 && end.length !== 0) {
                flag = true;
                break;
            }
            
            if(board[i][j] === 'R') start=[i,j];
            if(board[i][j] === 'G') end=[i,j];
            
        }
    }
    
    answer = search(board, rows, cols, start, end);
    
    
    return answer;
}