#include <string>
#include <vector>
#include <map>
#include <sstream>
#include <cmath>
#include <algorithm>

using namespace std;

struct Record 
{
    int hour;
    int minute;
    bool in;
};
typedef struct Record Record;


vector<int> solution(vector<int> fees, vector<string> records) {
    vector<int> answer;
    
    map<int, vector<Record>> m;
    vector<int> cars;
    
    //파싱
    for(auto& item : records)
    {
        istringstream ss(item);
        string buffer;
        vector<string> vec;
        
        while (getline(ss, buffer, ' ')){
            vec.push_back(buffer);
        }
        
        Record R;
        
        int idx =0;
        
        istringstream str(vec[0]);
        
        while (getline(str, buffer, ':')){
            if(idx == 0) R.hour = stoi(buffer);
            else R.minute = stoi(buffer);
            idx +=1;
        }
        
        
        R.in = vec[2] == "IN" ? true : false;
        
        int num = stoi(vec[1]);
        
        if(m.find(num) != m.end()) 
        {
            m[num].push_back(R);
        }
        else
        {
            vector<Record> v = {R};
            m.insert({num, v});
        }
        
        if(find(cars.begin(), cars.end(), num) == cars.end()) cars.push_back(num);
    }
    
    sort(cars.begin(), cars.end());
    
    // 시간 구하기
    for(int& car : cars) {
        auto& data = m[car];
        
        int prev = -1;
        int time =0;
        const int lastTime = 23*60 + 59;
        for(auto& item : data) 
        {
            if(prev == -1) prev = item.hour * 60 + item.minute;
            else 
            {
                time += (item.hour * 60 + item.minute) - prev;
                prev =-1;
            }
        }
        
        if(prev != -1) time += lastTime - prev;
        
        answer.push_back(time);
        
        
    }
    
    //요금 구하기
    int len = answer.size();
    for(int i=0; i<len; i++) 
    {
        int overTime = answer[i] - fees[0];
        
        if(overTime <=0) answer[i] = fees[1];
        else
        {
            int tmp= ceil(float(overTime) / float(fees[2]));
            
            answer[i] = fees[1] + tmp * fees[3]; 
        }
        
    }
    
    return answer;
}