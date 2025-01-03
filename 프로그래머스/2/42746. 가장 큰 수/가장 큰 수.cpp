#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(string a, string b)
{
    return a+b > b+a;
}

string solution(vector<int> numbers) {
    string answer ="";
    
    vector<string> nums;
    
    for(int& item : numbers)
    {
        nums.push_back(to_string(item));
    }
    
    sort(nums.begin(), nums.end(), compare);
    
    for(string& item : nums)
    {
        answer += item;
    }
    
    if(answer[0] == '0') return "0";
    
    return answer;
}