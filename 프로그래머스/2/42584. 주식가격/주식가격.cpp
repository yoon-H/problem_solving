#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> prices) {
    
    int len = prices.size();
    
    vector<int> answer(len);
    
    // 1. 마지막부터 순회하기, 마지막은 0
    answer.back() = 0;
    
    for(int i = len-2; i>=0; i--)
    {
        const int item = prices[i];
        
        // 2. 이전 값보다 크면 1
        if(item > prices[i+1]) 
        {
            answer[i] = 1; 
            continue;
        }
        
        // 3. 이전 값보다 작으면 큰 값 나올 때까지 검사
        int idx = i+2;
        while(idx < len)
        {
            // 4. 큰 값 나오면 인덱스 차이 값 만큼 집어넣기
            if(item > prices[idx])
            {
                answer[i] = idx - i;
                break;
            }
            
            idx +=1;
        }
        
        // 5. 끝까지 떨어지지 않으면 끝까지 버틴 시간 입력
        if(idx == len) answer[i] = len - i - 1;
    }
    
    return answer;
}