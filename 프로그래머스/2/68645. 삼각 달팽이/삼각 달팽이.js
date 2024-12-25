function solution(n) {
    var answer = [];
    
    let arr = Array.from({length : n}, (v,i) => Array.from({length : i+1}, () => 0));
    const dx = [1,0,-1];
    const dy = [0,1,-1];
    
    let len = 0;
    
    for(let i = 1; i<= n; i++) len += i;
    
    let num = 1;
    let dir = 0;
    let x = 0;
    let y=0;
    while(num <= len)
    {
        arr[x][y] = num;
        
        const newX = x + dx[dir];
        const newY = y + dy[dir];
        
        if(newX <0 || newX >= n || newY <0 || newY > newX || arr[newX][newY] != 0)
        {
            dir = (dir +1) % 3;
            x += dx[dir];
            y += dy[dir];
        } else {
            x = newX;
            y = newY;
        }
        
        
        num +=1;
    }
    
    for(let i=0; i<n ;i++)
    {
        for(let j=0; j<=i; j++)
        {
            answer.push(arr[i][j]);
        }
    }
    
    
    return answer;
}