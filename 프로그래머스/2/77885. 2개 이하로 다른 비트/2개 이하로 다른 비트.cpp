#include <string>
#include <vector>
#include <cmath>

using namespace std;

string decToBin(long long num) 
{
    string res ="";
    
    while(num != 0) 
    {
        res = char('0' + num %2) + res;
        
        num/=2;
    }
    
    return res;
}

long long binToDec(string str)
{
    long long num = 0;
    
    long long len = str.length();
    long long cnt =0;
    for(long long i=len-1; i>=0 ;i--)
    {
        num += int(str[i] - '0') * pow(2 ,cnt);
        
        cnt +=1;
    }   
    return num;
}

vector<long long> solution(vector<long long> numbers) {
    vector<long long> answer;
    
    for(long long& num : numbers) 
    {
        string str = "0" + decToBin(num);
        
        long long len = str.size();
        
        long long idx = 0;
        
        for(long long i= len-1; i>=0; i--) 
        {
            if(str[i] == '0')
            {
                idx = i;
                break;
            }
        }
        
        idx = len - idx;
        
        if(idx <3) answer.push_back(num+1);
        else 
        {
            string tmp = str.substr(0, len - idx) + "10";
            
            for(long long i=0; i<idx-2; i++)
                tmp += '1';
            
            long long res = binToDec(tmp);
            answer.push_back(res);
        }
    }
    
    return answer;
}