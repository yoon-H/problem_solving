let zeroAmount =0;
let oneAmount =0;

function isEqual(board, x, y, size) {
    let prev;
    
    for(let i = x; i < x+size; i++) {
        for(let j = y; j<y+size; j++) {
            if(i==x && j ==y) prev = board[i][j];
            else {
                if(board[i][j] != prev) return false;
            }
        }
    }
    
    return true;
}

function quad(answer, board, x, y, size) {
    if(size == 1) {
        answer[board[x][y]] +=1;
        return;
    }
    
    if(isEqual(board, x, y,size)) {
        answer[board[x][y]] +=1;
        return;
    }
    
    quad(answer, board, x, y, size/2);
    quad(answer, board, x + size/2, y, size/2);
    quad(answer, board, x, y + size/2, size/2);
    quad(answer, board, x + size/2, y + size/2, size/2);
}

function solution(arr) {
    var answer = [0,0];
    
    let len = arr.length;
    quad(answer, arr, 0,0 , len);
    return answer;
}