function solution(fees, records) {
    var answer = [];
    
    let infos = {};
    let cars = [];
    
    //파싱
    for(const item of records) {
        let arr = item.split(' ');
        
        let time = arr[0].split(':').reduce((acc, num, idx) => {
            if(idx === 0) acc += num*60;
            else acc += +num;
            
            return acc;
        }, 0);
        
        const num = arr[1];
        
        if(!infos[num]) infos[num] = [time];
        else infos[num].push(time);
        
        if(!cars.includes(num)) cars.push(num);
    }
    
    cars = cars.sort();
    
    //시간 구하기
    for(const car of cars) {
        const times = infos[car];
        
        let total =0;
        let prev = -1;
        const lastTime = 23*60 + 59;
        for(const time of times) {
            if(prev === -1) prev = time;
            else {
                total += time - prev;
                prev = -1;
            }
        }
        
        if(prev !== -1) total += lastTime - prev;
        
        answer.push(total);
    }
    
    //요금 구하기
    const len = answer.length;
    for(let i = 0; i<len ; i++) {
        const time = answer[i];
        const overTime = time - fees[0];
        
        if(overTime <=0) answer[i] = fees[1];
        else {
            let tmp = Math.ceil(overTime / fees[2]);
            
            answer[i] = fees[1] + tmp*fees[3];
        }
    }
    
    
    return answer;
}

