#include <string>
#include <vector>

using namespace std;

int solution(vector<int> arr) {
    int answer = 0;
    
    int len = arr.size();
    
    answer = arr[0];
    
    for(int i=1; i<len; i++) 
    {
        int tmp = arr[i];
        
        //최소 공배수 구하기
        int cases = min(answer, tmp);
        int num1 =answer;
        int num2 =tmp;
        
        for(int i=2; i<=cases; i++) 
        {
            while(num1 %i == 0 && num2 % i == 0) 
            {
                num1 /= i;
                num2 /= i;
            }
        }
        
        answer = num1 * tmp;
    }
    
    
    return answer;
}