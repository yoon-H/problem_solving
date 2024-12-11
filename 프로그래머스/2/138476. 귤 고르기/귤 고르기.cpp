#include <string>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

bool compare(int& a, int& b) {
    return a >b;
}

int solution(int k, vector<int> tangerine) {
    int answer = 0;
    
    map<int, int> m;
    
    for(int& item : tangerine)
    {
        if(m.find(item) != m.end()) m[item] +=1;
        else m.insert({item, 1});
    }
    
    vector<int> vec;
    
    for (auto it = m.begin(); it != m.end(); it++) 
        vec.push_back(it->second);
    
    sort(vec.begin(), vec.end(), compare);
    
    for(auto& item : vec)
    {
        answer +=1;
        if(item >= k) break;
        else k -= item;
    }
    
    
    return answer;
}