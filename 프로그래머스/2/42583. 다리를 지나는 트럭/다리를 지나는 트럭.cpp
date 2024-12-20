#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(int bridge_length, int weight, vector<int> truck_weights) {
    int answer = 0;
    
    int curWeight =0;
    deque<int> q;
    
    for(int i=0; i<bridge_length ; i++)
    {
        q.push_back(0);
    }
    
    for(int& item : truck_weights) 
    {
        curWeight += item;
        
        if(curWeight <= weight)
        {
            curWeight -= q.front();
            q.pop_front();
            q.push_back(item);
            answer +=1;
            continue;
        }
        
        while(curWeight > weight)
        {
            curWeight -= q.front();
            q.pop_front();
            q.push_back(0);
            answer +=1;
        }
        
        q.pop_back();
        q.push_back(item);
    }
    
    answer += bridge_length;
    
    return answer;
}