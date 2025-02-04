function solution(plans) {
    var answer = [];
    
    // 분 단위로 환산
    plans.forEach((plan) => {
        const start = plan[1].split(":").map(Number);        
        plan[1] = start[0] * 60 + start[1];
        
        plan[2] = Number(plan[2]);
        
    });
    
    // 정렬
    plans.sort((a,b) => a[1] - b[1]);
    
    let stack = []; // 밀린 일
    const len = plans.length;
    let idx = 1; // 현재 진행 중인 일 순서
    let task = plans[0]; // 현재 진행 중인 업무
    
    while(task !== -1) {
        // 현재 일의 끝나는 시간
        const endTime = task[1] + task[2];
        
        // 다음 업무가 있을 때
        if(idx < len) {
            const nextTime = plans[idx][1];
            
            // 시간이 남을 때
            if(endTime < nextTime) {
                answer.push(task[0]);
                
                if(stack.length > 0) {
                    // 시작 시간을 업무 끝난 시간으로 설정
                    const lastTask = stack.pop();
                    task = [lastTask[0], endTime, lastTask[1]];
                } else {
                    task = plans[idx];
                    idx +=1;
                }
            } else if (endTime === nextTime) { // 딱 맞게 끝났을 때
                answer.push(task[0]);
                
                task = plans[idx];
                idx +=1;
            } else { // 업무 진행 중 새로운 과제를 해야 할 때
                // 남은 업무 저장하기
                const remainWork = task[2] - (nextTime - task[1]);
                stack.push([task[0], remainWork]);
                
                task = plans[idx];
                idx +=1;
            }
        } else { // 다음 업무가 없을 때
            answer.push(task[0]);
            
            if(stack.length > 0) {
                const lastTask = stack.pop();
                task = [lastTask[0], task[1] + task[2], lastTask[1]];
            } else {
                task = -1;
                break;
            }
               
        }
        
    }
    
    
    
    return answer;
}