#include <iostream>
#include <vector>
using namespace std;

int arr[100002];
long long sum[100002];

void fillIn(int size)
{
	for (int i = 1; i <= size; i++)
	{
		sum[i] = sum[i - 1] + arr[i];
	}
}

int main()
{
	cin.tie(NULL);
	cout.tie(NULL);
	ios::sync_with_stdio(false);

	int N, M;
	cin >> N >> M;

	for (int i = 1; i <= N; i++)
	{
		int tmp;
		cin >> tmp;

		arr[i] = tmp;
	}

	fillIn(N);

	for (int i = 0; i < M; i++)
	{
		int start, end;

		cin >> start >> end;
		
		long long res = sum[end] - sum[start-1];

		cout << res << '\n';
	}

	
}