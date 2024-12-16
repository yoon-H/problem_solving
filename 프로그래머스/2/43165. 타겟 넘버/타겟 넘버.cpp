#include <string>
#include <vector>

using namespace std;

vector<int> elements;
int length;
int value;
int tg;

void search(int depth, int total)
{
    
    if(depth>= length)
    {
        if(total == tg)
        {
            value +=1;
        }
        return;
    }
    else
    {
        for(int i=0; i<2;i++)
        {
            if(i==0)
            {
                total += elements[depth];
                search(depth +1, total);
                total -= elements[depth];
            }
            else
            {
                total -= elements[depth];
                search(depth +1, total);
                total += elements[depth];
            }
        }
    }
}

int solution(vector<int> numbers, int target) {
    int answer = 0;
    
    tg = target;
    
    length = numbers.size();
    
    for(int i=0; i<length; i++)
    {
        elements.push_back(numbers[i]);
    }
    
    search(0, 0);
    
    answer = value;
    
    return answer;
}