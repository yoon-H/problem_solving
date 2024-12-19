#include <string>
#include <vector>
#include <map>

using namespace std;

int solution(vector<int> topping) {
    int answer = 0;
    
    map<int, int> m1;
    map<int, int> m2;
    int cnt1 =0;
    int cnt2 =0;
    
    for(int& item : topping)
    {
        if(m2.find(item) != m2.end()) m2[item] += 1;
        else {
            m2.insert({item, 1});
            cnt2 +=1;
        }
    }
    
    int len = topping.size();
    for(int i=0; i<len-1; i++) 
    {
        int item = topping[i];
        
        if(m1.find(item) != m1.end()) m1[item] += 1;
        else 
        {
            m1.insert({item, 1});
            cnt1 +=1;
        }
        
        m2[item] -= 1;
        
        if(m2[item] ==0) 
        {
            m2.erase(item);
            cnt2 -=1;
        }
        
        if(cnt1 == cnt2) answer +=1;
    }
    
    return answer;
}