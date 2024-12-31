#include <string>
#include <vector>

using namespace std;

int dx[4] = {0,1,0,-1};
int dy[4] = {1,0,-1,0};

vector<int> solution(int rows, int columns, vector<vector<int>> queries) {
    vector<int> answer;
    
    vector<vector<int>> board;
    
    // 보드 초기화
    int cnt = 1;
    for(int i=0; i< rows; i++) 
    {
        vector<int> v;
        for(int j=0; j<columns; j++)
        {
            v.push_back(cnt);
            cnt +=1;
        }
        
        board.push_back(v);
    }
    
    
    int len = queries.size();
    for(int i=0; i<len; i++) 
    {
        auto item = queries[i];
        int x = item[0]-1;
        int y = item[1]-1;
        int num = board[x][y];
        int idx = 0;
        int minValue = rows*columns +1;
        while(true) 
        {
            if(num < minValue) minValue = num;
            
            if(x == item[0]-1 && y == item[3]-1) idx +=1;
            else if (x == item[2]-1 && y == item[3]-1) idx +=1;
            else if (x == item[2]-1 && y == item[1]-1) idx +=1;
            
            int newX = x + dx[idx];
            int newY = y + dy[idx];
            
            int tmp = board[newX][newY];
            board[newX][newY] = num;
            num = tmp;
            
            if(newX == item[0]-1 && newY == item[1]-1) break;
            
            x = newX;
            y = newY;
        }
        
        answer.push_back(minValue);
    }
    
    
    
    return answer;
}