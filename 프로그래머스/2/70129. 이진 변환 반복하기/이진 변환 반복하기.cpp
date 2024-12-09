#include <string>
#include <vector>
#include <iostream>

using namespace std;

string binToDec(int num) {
    string word ="";
    while (num>0) {
        if( num % 2 == 0) word = '0' + word;
        else word = '1' + word;
        
        num /= 2;
    }
    
    return word;
}

vector<int> solution(string s) {
    vector<int> answer = {0,0};
    
    while(s != "1") {
        int len = s.length();
        int cnt = 0;
        
        for(int i=0; i<len ; i++) {
            if(s[i] == '1') {
                cnt +=1;
            }
        }
        
        answer[1] += len - cnt;
        
        //이진 변환
        s = binToDec(cnt);
        
        answer[0] += 1;        
    }
    
    return answer;
}