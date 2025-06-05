#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int main(int argc, char** argv)
{
	cin.tie(NULL);
	cout.tie(NULL);
	std::ios::sync_with_stdio(false);

    int n;

    vector< long long> vec;

    cin >> n;

    for (int i = 0; i < n; i++) {
        long long num;

        cin >> num;

        vec.push_back(num);
    }

    int cnt = 0;

    sort(vec.begin(), vec.end());

    for (int i = 0; i < n; i++) {
        long long num = vec[i];
        int start = 0;
        int end = n - 1;

        while (start < end) {
            long long tmp = vec[start] + vec[end];

            if (tmp < num) {
                start += 1;
            }
            else if (tmp > num) {
                end -= 1;
            }
            else {
                if (start == i) start += 1;
                else if (end == i) end -= 1;
                else {
                    cnt += 1;
                    break;
                }
            }
        }
    }

    cout << cnt;
}