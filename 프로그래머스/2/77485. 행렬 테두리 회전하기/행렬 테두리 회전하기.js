function solution(rows, columns, queries) {
    var answer = [];
    
    let dx = [0,1,0, -1];
    let dy = [1,0,-1,0];
    
    let board = [];
    
    let cnt =1;
    for(let i=0; i<rows; i++) {
        let tmp = [];
        for(let j =0; j<columns; j++) {
            tmp.push(cnt);
            cnt +=1;
        }
        board.push(tmp);
    }
    
    for(const item of queries) {
        let x = item[0]-1;
        let y = item[1]-1;
        let num = board[x][y];
        let min = num;
        let idx = 0;
        while(true) {
            if(x == item[0]-1 && y == item[3]-1) idx +=1;
            else if (x == item[2]-1 && y == item[3]-1) idx +=1;
            else if (x == item[2]-1 && y == item[1]-1) idx +=1;
            
            let newX = x + dx[idx];
            let newY = y + dy[idx];        
            
            const tmp = board[newX][newY];
            board[newX][newY] = num;
            num = tmp;
            
            if(min > num) min = num;
            
            if(newX == item[0]-1 && newY == item[1]-1) break;
            
            x = newX;
            y = newY;
        }
        
        answer.push(min);
    }
    
    return answer;
}