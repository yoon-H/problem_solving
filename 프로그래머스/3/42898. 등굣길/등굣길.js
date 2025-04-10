function solution(m, n, puddles) {
    const board = Array.from({length : n+1}, () => Array.from({length:m+1}, () => 0));
    const mod = 1000000007;
    
    for(const puddle of puddles){
        board[puddle[1]][puddle[0]] = -1;
    }
    
    board[1][1] = 1;
    
    for(let i=1; i<n+1; i++) {
        for(let j=1; j<m+1; j++) {
            if(i===1 && j===1) continue;
            if(board[i][j] === -1) continue;
            
            if(board[i-1][j] !== -1) board[i][j] += board[i-1][j];
            if(board[i][j-1] !== -1) board[i][j] += board[i][j-1];
            
            board[i][j] %= mod;
        }
    }    
    
    return board[n][m];
}