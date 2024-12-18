#include <string>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

int solution(string word) {
    int answer = 0;
    
    vector<char> vec = {' ','A', 'E', 'I', 'O', 'U'};
    
    int len = word.length();
    for(int i=0; i< len;i++) {
        int idx = find(vec.begin(), vec.end(), word[i]) - vec.begin();
        
        answer += idx;
        
        int sum = 0;
        for(int j=4-i; j>0; j--) {
            sum += pow(5,j);
        }
        
        answer += sum*(idx-1);
        
    }
    
    return answer;
}