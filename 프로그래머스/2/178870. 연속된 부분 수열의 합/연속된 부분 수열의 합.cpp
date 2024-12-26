#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> sequence, int k) {
    vector<int> answer;
    
    vector<int> sums = {0};
    
    int len = sequence.size();
    
    for(int i=0; i<len ;i++) 
    {
        sums.push_back(sums[i] + sequence[i]);
    }
    
    int maxLen = 1000001;
    int startIdx = 0;
    int endIdx = 1;
    
    while(endIdx <= len) 
    {
        int value = sums[endIdx] - sums[startIdx];
        
        if(value == k) 
        {
            int curLen = endIdx - startIdx -1;
            
            if(maxLen > curLen)
            {
                answer = {startIdx, endIdx -1};
                maxLen =curLen;
            }
        }
        
        if(value < k) endIdx +=1;
        else startIdx +=1;
    }
    
    return answer;
}