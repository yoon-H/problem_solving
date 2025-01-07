#include <string>
#include <vector>
#include <queue>

using namespace std;

int search(vector<bool> & visited,vector<vector<int>> &wires) {
    queue<int> q;
    
    int len = wires.size();
    int cnt =1;
    q.push(wires[0][0]);
    visited[wires[0][0]] = true;
    
    while(!q.empty()) {
        int tower = q.front();
        q.pop();
        
        for(int i=0; i<len; i++) {
            vector<int> wire = wires[i];
            
            if(wire[0] == tower && !visited[wire[1]]) {
                q.push(wire[1]);
                cnt +=1;
                visited[wire[1]] = true;
            }
            
            if(wire[1] == tower && !visited[wire[0]]) {
                q.push(wire[0]);
                cnt +=1;
                visited[wire[0]] = true;
            }
        }
    }
    
    return cnt;
    
}

int solution(int n, vector<vector<int>> wires) {
    int answer = n;
    
    for(int i=0; i<n-1;i++) {
        vector<vector<int>> tmp = wires;
        tmp.erase(tmp.begin() + i);
        vector<bool> visited(n+1);
        
        int res = search(visited,tmp);
        res = abs(2*res -n);
        
        if(res == 0) {
            answer = 0;
            break;
        }
        else {
            if(res < answer) answer = res;
        }
    }
    
    
    return answer;
}