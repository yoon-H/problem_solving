#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

int solution(int k, vector<vector<int>> dungeons) {
    int answer = -1;
    
    vector<int> arr;
    
    int len = dungeons.size();
    
    for(int i=1; i<=len ;i++) 
    {
        arr.push_back(i);
    }
    
    do 
    {
        
        int cnt =0;
        int hp = k;
        
        for(auto& idx : arr)
        {
            auto& item = dungeons[idx-1];
            
            if(item[0] > hp) break;
            
            hp -= item[1];
            cnt +=1;
        }
        if(cnt > answer) answer = cnt;
    }
    while(next_permutation(arr.begin(), arr.end()));
    
    
    return answer;
}