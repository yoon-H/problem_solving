#include <string>
#include <vector>
//#include <iostream>

using namespace std;

int zeroAmount = 0;
int oneAmount=0;

bool isEqual(const vector<vector<int>>& board, int x, int y, int size) 
{
    int prev;
    for(int i=x ;i< x+size; i++)
    {
        for(int j=y; j< y+size; j++)
        {
            //cout << board[i][j] << ' ';
            
            if(i==x && j==y) prev = board[i][j];
            else 
            {
                if(prev != board[i][j]) return false;
            }
        }
        
        //cout << '\n';
    }
    
    return true;
}

void quad(const vector<vector<int>>&board, int x, int y, int size)
{
    if(size ==1) 
    {
        if(board[x][y] == 0) zeroAmount +=1;
        else oneAmount +=1;
        return;
    }
    
    if(isEqual(board, x, y, size)) 
    {
        if(board[x][y] == 0) zeroAmount +=1;
        else oneAmount +=1;
        return;
    }
    
    //cout << x << ' ' << y << ' ' << size << '\n';
    
    quad(board, x, y, size/2);
    quad(board, x + size/2, y, size/2);
    quad(board, x, y + size/2, size/2);
    quad(board, x + size/2, y + size/2, size/2);
}


vector<int> solution(vector<vector<int>> arr) {
    vector<int> answer;
    
    int len = arr.size();
    
    quad(arr, 0,0,len);
    
    answer.push_back(zeroAmount);
    answer.push_back(oneAmount);
    
    return answer;
}