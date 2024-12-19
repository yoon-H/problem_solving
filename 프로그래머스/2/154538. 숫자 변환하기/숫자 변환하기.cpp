#include <string>
#include <vector>
#include <iostream>
#include <queue>

using namespace std;


vector<int> visited(1000002, -1);
int target =0;
int add = 0;

void search(int num)
{
    queue <pair<int, int>> q;
    
    q.push({num, 0});
    
    visited[num] = 0;
    
    while(!q.empty()) 
    {
        auto& item = q.front();
        q.pop();
        
        int cur = item.first;
        int depth = item.second;
        
        if(cur == target) continue;
        
        //다음 노드 넣기
        vector<int> v;
        v.push_back(cur*3);
        v.push_back(cur*2);
        v.push_back(cur + add);
        
        for(int& tmp : v)
        {
            if(tmp <= target)
            {
                if(visited[tmp] == -1) {
                    q.push({tmp, depth +1});
                    visited[tmp] = depth +1;
                }
            }
        }
    }
}

int solution(int x, int y, int n) {
    int answer = 0;
    
    target = y;
    add= n;
    
    search(x);
    
    answer = visited[y];
    
    return answer;
}