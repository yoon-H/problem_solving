#include <string>
#include <vector>
#include <set>

using namespace std;

int solution(vector<int> elements) {
    int answer = 0;
    
    int len = elements.size();
    
    for(int i=0; i<len ;i++) 
    {
        elements.push_back(elements[i]);
    }
    
    set<int> nums;
    
    for(int num=1; num<=len; num++) 
    {
        
        for(int i=0; i<len; i++) 
        {
            int total =0;
            for(int j=i; j<i+num; j++) 
            {
                total += elements[j];
            }
            
            nums.insert(total);
        }
    }
    
    answer = nums.size();
    
    return answer;
}