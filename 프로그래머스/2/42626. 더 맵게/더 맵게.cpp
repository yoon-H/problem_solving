#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> scoville, int K) {
    int answer = 0;
    
    priority_queue<int, vector<int>, greater<int>> pq;
    
    for(int item : scoville)
    {
        pq.push(item);
    }
    
    while(pq.top() < K)
    {
        int first = pq.top();
        pq.pop();
        if(pq.empty()) return -1;
        int second = pq.top();
        pq.pop();
        
        pq.push(first + second*2);
        answer +=1;
    }
    
    
    return answer;
}