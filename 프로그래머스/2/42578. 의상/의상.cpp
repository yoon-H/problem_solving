#include <string>
#include <vector>
#include <map>

using namespace std;

int solution(vector<vector<string>> clothes) {
    int answer = 0;
    
    map<string, int> m;
    
    for(auto& item : clothes)
    {
        m[item[1]] +=1;
    }
    
    int total = 1;
    
    for(auto it = m.begin(); it != m.end(); it++) 
    {
        total *= it->second +1;
    }
    
    total -=1;
    
    answer = total;
    
    return answer;
}