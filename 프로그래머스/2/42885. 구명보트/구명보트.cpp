#include <string>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

int solution(vector<int> people, int limit) {
    int answer = 0;
    
    int len = people.size();
    vector<int> vec;
    map<int, int> m;
    
    // 삽입
    for(int& item : people)
    {
        if(m.find(item) != m.end())
        {
            m[item] +=1;
        }
        else
        {
            m[item] = 1;
            vec.push_back(item);
        }
    }
    
    // 정렬
    sort(vec.begin(), vec.end());
    
    // 짝꿍 찾기!
    while(!m.empty())
    {
        // 하나 남았을 때 삭제
        if(len == 1)
        {
            answer += 1;
            break;
        }
        
        // 최대값
        const int value = vec.back();
        
        // 차이값
        const int diff = limit - value;
        
        if(vec[0] <= diff)
        {           
            if(m[vec[0]] == 1) 
            {
                m.erase(vec[0]);
                vec.erase(vec.begin());   
            }
            else m[vec[0]] -=1;
            
            len -= 1;
        }
        
        if(m[value] == 1) 
        {
            m.erase(value);
            vec.pop_back();   
        }
        else m[value] -=1;
        len -=1;
        
        answer +=1;
    }
    
    return answer;
}