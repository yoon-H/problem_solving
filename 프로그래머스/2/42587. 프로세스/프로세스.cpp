#include <string>
#include <vector>

using namespace std;


int solution(vector<int> priorities, int location) {
    int answer = 1;
    
    int len = priorities.size();
    int idx = 0;
    vector<bool> visited(len);
    
    while(answer < len) 
    {
        int max = -1;
        int tmp = idx;
        
        for(int i=tmp; i<tmp + len; i++)
        {
            int loc = i %len;
            
            if(!visited[loc] && priorities[loc] > max) 
            {
                idx = loc;
                max = priorities[loc];
            }
        }
        
        if(idx == location) break;
        answer +=1;
        visited[idx] = true;
    }
    
    
    return answer;
}