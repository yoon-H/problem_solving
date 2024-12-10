#include <iostream>
#include <cmath>

using namespace std;

int solution(int n, int a, int b)
{
    int answer = 0;

    while(a != b) {
        a = ceil(float(a)/2);
        b = ceil(float(b)/2);
        
        answer++;
        
    }

    return answer;
}