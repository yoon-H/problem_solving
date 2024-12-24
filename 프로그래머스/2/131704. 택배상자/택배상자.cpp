#include <string>
#include <vector>
#include <stack>
#include <queue>

using namespace std;

int solution(vector<int> order) {
    int answer = 0;
    
    int len = order.size();
    
    queue<int> q;
    
    for(int i=1; i<=len ; i++)
        q.push(i);
    
    stack<int> s;
    
    for(auto item : order)
    {
        if(q.empty() || q.front() > item)
        {
            if(s.top() != item) break;
            else
            {
                answer +=1;
                s.pop();
                continue;
            }
        }
        
        while(q.front() < item)
        {
            s.push(q.front());
            q.pop();
        }
        
        if(q.front() == item)
        {
            answer +=1;
            q.pop();
        } else break;
    }
    
    return answer;
}