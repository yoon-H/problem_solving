#include <string>
#include <vector>
#include <cmath>

using namespace std;

string changeNum(int num, int base)
{
    string res = "";
    
    while(num >0)
    {
        res = char('0' + num%base) + res;
        
        num = num/base;
    }
    
    return res;
}

int solution(int n, int k) {
    int answer = 0;
    
    string str = changeNum(n, k);
    
    vector<long long> nums;
    string word = "";
    for(char& c : str)
    {
        if(c == '0' )
        {
            if(word != "")
            {
                nums.push_back(stoll(word));
                word = "";
            }
            continue;
        }
        
        word += c;
    }
    
    if(word != "") nums.push_back(stoll(word));
    
    for(auto& item : nums)
    {
        if(item == 1) continue;
        
        long long len = sqrt(item);
        bool flag = true;
        
        for(long long i=2; i<= len ;i++)
        {
            if(item % i ==0) {
                flag = false;
                break;
            }
        }
        
        if(flag) answer +=1;
    }
    
    
    return answer;
}