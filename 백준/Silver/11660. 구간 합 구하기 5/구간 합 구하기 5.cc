#include <vector>
#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	cin.tie(NULL);
	cout.tie(NULL);
	std::ios::sync_with_stdio(false);

	int n, m;

	vector<vector<int>> board;

	vector<vector<long long>> dist;

	cin >> n >> m;

	board.resize(n + 1, vector<int>(n+1, 0));
	dist.resize(n + 1, vector<long long>(n + 1, 0));

	for (int i = 1; i <= n; i++)
	{
		for (int j = 1; j <= n; j++) 
		{
			int num;

			cin >> num;

			board[i][j] = num;
		}
	}

	dist[1][1] = board[1][1];

	// 가로 세로 첫 째 줄 초기화
	for (int i = 2; i <= n; i++) {
		dist[1][i] = board[1][i] + dist[1][i - 1];
		dist[i][1] = board[i][1] + dist[i-1][1];
	}

	// 합 초기화
	for (int i = 2; i <= n; i++) {
		for (int j = 2; j <= n; j++) {
			dist[i][j] = dist[i - 1][j] + dist[i][j - 1] - dist[i - 1][j - 1] + board[i][j];
		}
	}

	for (int i = 0; i < m; i++) {
		int x1, y1, x2, y2;

		cin >> x1 >> y1 >> x2 >> y2;

		cout << dist[x2][y2] - dist[x1-1][y2] - dist[x2][y1-1] + dist[x1-1][y1-1] <<'\n';
	}
}