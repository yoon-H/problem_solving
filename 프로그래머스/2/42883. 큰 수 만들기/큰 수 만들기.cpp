#include <string>
#include <vector>

using namespace std;

string solution(string number, int k) {
    string answer = "";
    
    int len = number.size();

    int startIdx = 0;
    char maxValue;
    int maxIdx;
    
    for(int i=len -k; i>0; i--) {
        maxValue = '0';
        
        for(int j= startIdx; j <= len -i; j++) {
            if(number[j] > maxValue) {
                maxIdx = j;
                maxValue = number[j];
                if(maxValue == '9') break;
            }
        }
        
        answer += maxValue;
        startIdx = maxIdx +1;
    }
    
    return answer;
    
    
    return answer;
}