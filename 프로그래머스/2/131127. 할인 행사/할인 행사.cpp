#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<string> want, vector<int> number, vector<string> discount) {
    int answer = 0;
    
    int sum = 0;
    int wantLen = want.size();
    int len = discount.size();
    
    for(auto& item : number)
    {
        sum += item;
    }
    
    for(int first = 0; first <= len - sum ; first++) {
        vector<int> vec(wantLen);
        bool flag = true;
        
        for(int i=first; i < first + sum; i++){
            auto loc = find(want.begin(), want.end(), discount[i]);
            
            if(loc == want.end()) {
                flag = false;
                break;
            }
            
            int idx = loc- want.begin();
            
            if(vec[idx] == number[idx]) {
                flag = false;
                break;
            } else vec[idx] +=1;
        }
        
        if(flag) answer +=1;
    }
    
    
    
    return answer;
}