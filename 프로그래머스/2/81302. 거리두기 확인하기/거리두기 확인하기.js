function search(place) {
    let flag = false;
    
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1];
    
    for(let i=0; i<5; i++) {
        if(flag) break;
        for(let j =0; j<5; j++) {
            if(flag) break;
            if(place[i][j] !== 'P') continue;
            
            // 상하좌우 탐색
            for(let idx=0;idx<4; idx++) {
                if(flag) break;
                const x = i + dx[idx];
                const y = j + dy[idx];
                
                if(x < 0 || x >= 5) continue;
                if(y < 0 || y >= 5) continue;
                
                if(place[x][y] === 'P') {
                    flag = true;
                    break;
                }
                
                // 테이블이면 한 번 더 탐색
                if(place[x][y] === 'O') {
                    for(let index = 0; index<4 ;index++) {
                        const newX = x + dx[index];
                        const newY = y+ dy[index];
                        
                        if(newX < 0 || newX >= 5) continue;
                        if(newY < 0 || newY >= 5) continue;
                        if(newX === i && newY === j) continue;
                        
                        if(place[newX][newY] === 'P') {
                            flag = true;
                            break;
                        }
                    }
                }
            }
            
//             // 주위 8칸 탐색
//             for(let x= i-1; x<=i+1; x++) {
//                 if(flag) break;
//                 if(x < 0 || x >=5) continue;
                
//                 for(let y = j-1; y<=j+1; y++) {
//                     if(y <0 || y>=5) continue;
//                     if(place[x][y] !== 'P') continue;
//                     if(x === i && y ===j) continue;
                    
//                     // P일때 맨해튼 거리 구하기
//                     const len = Math.abs(i-x) + Math.abs(j-y);
                    
//                     // 2보다 작으면(상하좌우면) 실패
//                     if(len <2) {
//                         flag = true;
//                         break;
//                     }
                    
//                     // 파티션이 없으면 실패
//                     if(place[i][y] !== 'X' || place[x][j] !== 'X') {
//                         flag = true;
//                         break;
//                     }
                    
                    
//                 }
//             }
        }
    }
    
    if(flag) return 0;
    else return 1;
}


function solution(places) {
    var answer = [];
    
     places.forEach((place) => {
         answer.push(search(place));
     })
    
    return answer;
}