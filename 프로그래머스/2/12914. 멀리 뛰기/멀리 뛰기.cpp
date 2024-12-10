#include <string>
#include <vector>

using namespace std;

long long solution(int n) {
    long long answer = 0;
    
    vector<int> arr;
    
    arr.push_back(0);
    arr.push_back(1);
    arr.push_back(2);
    
    for(int i=3; i<=n ;i++) 
    {
        arr.push_back((arr[i-1] + arr[i-2]) % 1234567);
    }
    
    answer = arr[n];
    
    return answer;
}