#include <string>
#include <vector>
#include <queue>
#include <map>
#include <algorithm>

using namespace std;

struct compare{
    bool operator()(pair<int,int>& a, pair<int,int>& b)
    {
        if(a.second == b.second)
        {
            return a.first > b.first;
        }
        return a.second < b.second;
    }
};

bool cmp(pair<string,int>& a, pair<string,int>& b)
{
    if(a.second == b.second)
    {
        return a.first < b.first;
    }
    return a.second > b.second;
}

vector<int> solution(vector<string> genres, vector<int> plays) {
    vector<int> answer;
    
    map<string, priority_queue<pair<int,int>, vector<pair<int,int>>, compare>> list; // 장르별 노래
    map<string, int> genrePlays; // 장르당 플레이 횟수
    
    int len = genres.size();
    
    for(int i=0; i<len; i++) 
    {
        if(list.find(genres[i]) == list.end()) // 없으면 추가
        {
            priority_queue<pair<int,int>, vector<pair<int,int>>, compare> tmp;
            list[genres[i]] = tmp;
            genrePlays[genres[i]] = 0;
        }
        
        list[genres[i]].push({i,plays[i]});
        
        genrePlays[genres[i]] += plays[i];
    }
    
    // map 정렬
    vector<pair<string,int>> vec(genrePlays.begin(), genrePlays.end());
    
    sort(vec.begin(), vec.end(), cmp);
    
    int size = vec.size();
    
    // 정답 찾기
    for(int i=0; i<size; i++)
    {
        string gen = vec[i].first;
        
        answer.emplace_back(list[gen].top().first);
        
        list[gen].pop();
        
        if(!list[gen].empty())
        {
            answer.emplace_back(list[gen].top().first);
        }        
    }
    
    
    return answer;
}