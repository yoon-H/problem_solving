#include <string>
#include <vector>
#include <set>
#include <cmath>

using namespace std;

set<int> nums;
int len =0;
string pieces;
bool visited[8];

void search(string num, int depth)
{
    if(num != "")
        nums.insert(stoi(num));
    
    if(depth == len) return;
    
    for(int i=0; i<len; i++)
    {
        if(!visited[i])
        {
            visited[i] = true;
            search(num + pieces[i], depth +1);
            visited[i] = false;
        }
    }
    
}

int solution(string numbers) {
    int answer = 0;
    
    len = numbers.length();
    pieces = numbers;
    
    search("", 0);
    
    for(auto it = nums.begin(); it!=nums.end(); it++)
    {
        int item = *it;
        
        if(item == 1 || item ==0) continue;
        
        bool flag = true;
        for(int i=2; i<= floor(sqrt(item)); i++)
        {
            if(item % i == 0)
            {
                flag = false;
            }
        }
        
        if(flag) answer +=1;
    }
    
    return answer;
}