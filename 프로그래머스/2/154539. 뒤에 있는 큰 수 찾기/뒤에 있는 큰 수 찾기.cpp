#include <string>
#include <vector>
#include <stack>

using namespace std;

vector<int> solution(vector<int> numbers) {
    int len = numbers.size();
    vector<int> answer(len, -1);
    stack<int> idxs;
    
    for(int i =0; i<len ;i++)
    {
        while(!idxs.empty())
        {
            if(numbers[idxs.top()] >= numbers[i]) break;
            else
            {
                answer[idxs.top()] = numbers[i];
                idxs.pop();
            }
        }
        idxs.push(i);
    }
    
    
    return answer;
}