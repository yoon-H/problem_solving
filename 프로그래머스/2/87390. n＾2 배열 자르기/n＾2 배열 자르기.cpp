#include <string>
#include <vector>

using namespace std;

vector<int> solution(int n, long long left, long long right) {
    vector<int> answer;

    vector<vector<int>> vec;

    long long x1 = left / n;
    long long y1 = left % n;

    long long x2 = right / n;
    long long y2 = right % n;

    if (x1 == x2)
    {
        for (int i = y1 + 1; i <= y2 +1; i++)
        {
            if (i <= x1 + 1) answer.push_back(x1 + 1);
            else answer.push_back(i);
        }

        return answer;
    }

    for (int i = y1 + 1; i <= n; i++)
    {
        if (i <= x1 + 1) answer.push_back(x1 + 1);
        else answer.push_back(i);
    }

    

    for (int i = x1 + 2; i <= x2; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            if (j <= i) answer.push_back(i);
            else answer.push_back(j);
        }
    }

    for (int i = 1; i <= y2 + 1; i++)
    {
        if (i <= x2 + 1) answer.push_back(x2 + 1);
        else answer.push_back(i);
    }

    return answer;
}