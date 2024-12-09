#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    int answer = 0;
    
    vector<int> vec;
    
    vec.push_back(0);
    vec.push_back(1);
    
    for(int i=2; i<=n; i++) {
        const int res = (vec[i-1] + vec[i-2]) %1234567;
        
        vec.push_back(res);
    }
    
    answer = vec[n];
    
    return answer;
}