function convert(time) {
    const arr = time.split(":").map(Number);
    
    return arr[0] * 60 + arr[1];
    
}


function solution(book_time) {
    var answer = 0;
    
    let time = book_time.map((value) => {
        let arr = [];
        
        arr.push(convert(value[0]));
        arr.push(convert(value[1]));
        
        return arr;
    })
    
    time.sort((a,b) => {
        if(a[0] === b[0]) {
            return a[1] - b[1];
        }
         
        return a[0] - b[0];
    });
    
    console.log(time);
    
    let arr = [];
    
    time.forEach((value) => {
        let flag = true;
        arr.some((item, idx) =>{
            if(item <= value[0]) {
                
                arr[idx] = value[1] +10;
                flag = false;
                return true;
            }
        })
        
        if(flag) arr.push(value[1] + 10);
    })
    
    answer = arr.length;
    
    
    return answer;
}