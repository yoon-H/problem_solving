#include <string>
#include <vector>

using namespace std;

vector<vector<int>> solution(vector<vector<int>> arr1, vector<vector<int>> arr2) {
    vector<vector<int>> answer;
    
    int col = arr1.size();
    int len = arr1[0].size();
    int row = arr2[0].size();
    for(int i=0; i<col; i++)
    {
        vector<int> v;
        for(int j=0; j<row; j++) 
        {
            int num = 0;
            for(int k=0; k<len; k++)
            {
                num += arr1[i][k] * arr2[k][j];
            }
            v.push_back(num);
        }
        
        answer.push_back(v);
    }
    
    return answer;
}