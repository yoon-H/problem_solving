#include <string>
#include <vector>
#include <iostream>

using namespace std;

struct Path
{
    long long cnt =0;
    bool isPuddle = false;
};

int solution(int m, int n, vector<vector<int>> puddles) {
    
    // 해당 위치 경로 수
    vector<vector<Path>> board;
    for(int i=0; i<n+1; i++)
    {
        vector<Path> vec(m+1);
        
        board.emplace_back(vec);
    }
    
    // 웅덩이 반영    
    for(auto puddle : puddles)
    {
        board[puddle[1]][puddle[0]].isPuddle = true;
        
        //cout<< puddle[1] << '/' << puddle[0] << '\n';
    }
    
    board[1][1] = Path{1};
    
    for(int i=1; i<n+1; i++)
    {
        for(int j=1; j<m +1; j++) 
        {
            if(i==1 && j==1) continue;
            if(board[i][j].isPuddle) continue;
            
            board[i][j].cnt += board[i][j-1].cnt;
            
            board[i][j].cnt += board[i-1][j].cnt;
            
            board[i][j].cnt %=1000000007;
        }
    }
    
    return board[n][m].cnt;
}