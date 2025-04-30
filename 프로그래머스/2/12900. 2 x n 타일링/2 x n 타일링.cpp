#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    
    vector<int> vec{0,1,2};
    
    for(int i=3; i<= n; i++) {
        int tmp = vec[i-1] + vec[i-2];
        vec.emplace_back(tmp % 1000000007);
    }
    
    
    return vec[n];
}