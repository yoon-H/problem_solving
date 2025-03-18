#include <vector>
#include <iostream>
#include <queue>

using namespace std;

vector<int> solution(vector<int> arr) 
{
    vector<int> answer;
    
    for(int item : arr) 
    {
        if(answer.empty()) answer.push_back(item);
        else
        {
            if(answer.back() != item)
                answer.push_back(item);
        }
    }

    return answer;
}