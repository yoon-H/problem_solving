function solution(queue1, queue2) {
    let answer = 0;

    // 초기 합계 계산 (BigInt 사용)
    let sum1 = queue1.reduce((acc, item) => acc + BigInt(item), BigInt(0));
    let sum2 = queue2.reduce((acc, item) => acc + BigInt(item), BigInt(0));

    // 두 큐를 병합
    let q = [...queue1, ...queue2];

    const len = queue2.length; // 원래 큐의 길이
    const queueLen = len * 2; // 병합된 큐의 길이

    let index1 = 0; // 첫 번째 큐의 시작 인덱스
    let index2 = len; // 두 번째 큐의 시작 인덱스

    let maxCount = len * 4; // 최대 반복 횟수

    while (answer <= maxCount) {
        if (sum1 === sum2) return answer; // 두 큐의 합이 같으면 종료

        if (sum1 > sum2) {
            // queue1에서 pop
            const item = BigInt(q[index1 % queueLen]);
            sum1 -= item;
            sum2 += item;
            index1++;
        } else {
            // queue2에서 pop
            const item = BigInt(q[index2 % queueLen]);
            sum1 += item;
            sum2 -= item;
            index2++;
        }

        answer++;
    }

    return -1; // 조건을 만족하지 못한 경우
}