#include <string>
#include <vector>
#include <stack>
#include <algorithm>
#include <iostream>

using namespace std;

int solution(string s) {
    int answer = 0;
    
    vector<char>start = {'[', '(', '{'};
    vector<char>last = {']',')','}'};
    
    int len = s.length();
    for(int i=0; i< len; i++) 
    {
        string tmpStr = s.substr(i,len- i) + s.substr(0, i);
        
        stack <char> pouch;
        bool flag = true;
        for(auto& item : tmpStr)
        {
            auto startIdx = find(start.begin(), start.end(), item);
            
            
            if(startIdx != start.end()) pouch.push(item);
            else 
            {
                if(pouch.empty())
                {
                    flag = false;
                    break;
                }
                
                auto endIdx = find(last.begin(), last.end(), item) - last.begin();
                
                if(pouch.top() != start[endIdx]) 
                {
                    flag = false;
                    break;
                } 
                else pouch.pop();
            }
        }
        
        if(flag && pouch.empty()) answer +=1;
    }
    
    return answer;
}