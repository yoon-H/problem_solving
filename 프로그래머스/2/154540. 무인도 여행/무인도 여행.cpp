#include <string>
#include <vector>
#include <algorithm>
#include <queue>

using namespace std;

int dx[4] = {-1,1,0,0};
int dy[4] = {0,0,-1,1};

bool visited[101][101];

int search(int startX,int startY,int len, int colLen, vector<string>& maps) {
    int res =0;
    queue<pair<int,int>> q;
    q.push({startX,startY});
    visited[startX][startY] = true;
    while(!q.empty()) 
    {
        auto item = q.front();
        
        int x = item.first;
        int y = item.second;
        
        q.pop();
        
        res += maps[x][y] - '0';
        
        for(int i =0; i<4; i++) 
        {
            int newX = x + dx[i];
            int newY = y + dy[i];
            
            if(newX <0 || newX >= len || newY <0 || newY >= colLen) continue;
            if(maps[newX][newY] != 'X' && !visited[newX][newY])
            {
                q.push({newX, newY});
                visited[newX][newY] = true;
            }
        }
    }
    
    return res;
}

vector<int> solution(vector<string> maps) {
    vector<int> answer;
    
    int len = maps.size();
    int colLen = maps[0].size();
    
    for(int i =0; i<len; i++) 
    {
        for(int j=0; j<colLen; j++) 
        {
            if(maps[i][j] != 'X' && !visited[i][j])
            {
                int res = search(i,j, len,colLen, maps);
                
                if(res >0) answer.push_back(res);
            }
        }
    }
    
    
    
    
    if(answer.size() ==0) answer.push_back(-1);
    else sort(answer.begin(), answer.end());
    
    return answer;
}