#include <string>
#include <vector>
#include <cmath>

using namespace std;

vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer;
    
    int cnt =0;
    int prev = -1;
    int len = progresses.size();
    for(int i=0; i<len ; i++) 
    {
        int days = ceil((float)(100 - progresses[i]) / (float)speeds[i]);   
        
        if(prev == -1)
        {
            prev = days;
            cnt +=1;
        } 
        else 
        {
            if(days > prev)
            {
                answer.push_back(cnt);
                
                prev = days;
                cnt =1;
            } 
            else 
            {
                cnt +=1;
            }
        }
    }
    
    answer.push_back(cnt);
    
    return answer;
}