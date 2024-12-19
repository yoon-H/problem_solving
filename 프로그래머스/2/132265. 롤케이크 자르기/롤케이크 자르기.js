function solution(topping) {
    var answer = 0;
    
    let obj1 = {};
    let obj2 = {};
    let cnt1 =0;
    let cnt2 =0;
    
    for(const item of topping) {
        if(obj2[item]) obj2[item] +=1;
        else obj2[item] = 1;
    }
    
    cnt2 = Object.keys(obj2).length;
    
    const len = topping.length;
    for(let i=0; i < len-1; i++) {
        const item = topping[i];
        
        if(obj1[item]) obj1[item] +=1;
        else {
            obj1[item] = 1;
            cnt1 +=1;
        }
        
        obj2[item] -=1;
        
        if(obj2[item] ==0) {
            delete obj2.item;
            cnt2 -=1;
        }
        
        if(cnt1 === cnt2) answer +=1;
    }
    
    return answer;
}