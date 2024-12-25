#include <string>
#include <vector>
#include <iostream>

using namespace std;

int arr[1001][1001];
int dx[3] = {1,0,-1};
int dy[3] = {0,1,-1};

vector<int> solution(int n) {
    vector<int> answer;
    
    int len = 0;
    
    for(int i = 1; i<= n; i++) len += i;
    cout << len << '\n';
    int num = 1;
    int dir = 0;
    int x = 0;
    int y=0;
    while(num <= len)
    {
        arr[x][y] = num;
        
        int newX = x + dx[dir];
        int newY = y + dy[dir];
        
        //cout <<  dir << " " << num <<' ' <<  newX << ' ' << newY << ' ' << x <<' ' <<  y << '\n' ;
        
        if(newX <0 || newX >= n || newY <0 || newY > newX || arr[newX][newY] != 0)
        {
            dir = (dir +1) % 3;
            x += dx[dir];
            y += dy[dir];
        } else {
            x = newX;
            y = newY;
        }
        
        
        num +=1;
    }
    
    for(int i=0; i<n ;i++)
    {
        for(int j=0; j<=i; j++)
        {
            answer.push_back(arr[i][j]);
        }
    }
    
    
    return answer;
}