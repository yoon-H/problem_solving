#include <string>
#include <vector>
#include <queue>
#include <cmath>
#include <algorithm>

using namespace std;

struct cmp {
  bool operator() (vector<int> a, vector<int> b) {
      if(a[2] == b[2]) {
          if(a[1] == b[1]) {
              return a[0] > b[0]; // 작업 번호가 작은 것
          }
          return a[1] > b[1]; // 작업 요청 시각
      }
      return a[2] > b[2]; // 소요 시간
  }
};

bool compare(vector<int> a, vector<int> b) {
    return a[0] < b[0];
}

int solution(vector<vector<int>> jobs) {    
    sort(jobs.begin(), jobs.end(), compare);
    
    priority_queue<vector<int>,vector<vector<int>>, cmp> pq; // 대기큐
    int time = 0; // 현재 시간
    int idx = 0; // 추가될 작업
    int endTime = 0; // 현재 작업 완료 시간
    const int len = jobs.size();
    vector<int> vec; // 소요 시간 모음
    
    while(idx < len || !pq.empty()) {
        // 1. 현재 시간에 해당하는 대기 큐에 작업 추가
        while(idx < len) {
            if(jobs[idx][0] > time) break;
            pq.push({idx, jobs[idx][0], jobs[idx][1]});
            idx +=1;
        }
        
        // 2-1. 대기 큐 비어있으면 시간 +1
        // 2-2. 차 있으면 작업 시작
        if(!pq.empty()) {
            endTime = time + pq.top()[2];
            vec.emplace_back(endTime - pq.top()[1]);
            pq.pop();
                
            time = endTime;
        } else if(idx < len) {
            time += 1;
        }
    }
    
    int sum = 0;
    
    for(const int t : vec) {
        sum += t;
    }
    
    
    return floor(sum / len);
}