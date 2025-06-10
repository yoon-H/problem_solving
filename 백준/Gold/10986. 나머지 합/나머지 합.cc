#include <vector>
#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	cin.tie(NULL);
	cout.tie(NULL);
	std::ios::sync_with_stdio(false);

	int n, m;

	vector<long long> sum;	// 합
	vector<long long> rems;	// 나머지

	long long answer = 0;

	cin >> n >> m;

	sum.resize(n + 1);
	rems.resize(m, 0);

	for (int i = 0; i < n; i++)
	{
		long long tmp;
		cin >> tmp;

		if (i == 0) sum[i] = tmp;
		else sum[i] = tmp+ sum[i-1];
	}

	for (int i = 0; i < n; i++)
	{
		int rem = sum[i] % m;

		if (rem == 0) answer += 1;

		rems[rem] += 1;
	}

	for (int i = 0; i < m; i++)
	{
		long long tmp = rems[i];

		if (tmp > 1) answer += tmp * (tmp - 1) / 2;
	}

	cout << answer;
}