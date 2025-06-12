function solution(x, n) {
    var answer = [];
    answer[0] =x;
    console.log(`${answer[0]}`)
    for (let i=1; i<n; i++) {
        answer[i] = x + answer[i-1];
        console.log(`${answer[i]} = ${x} + ${answer[i-1]}`);
    }
    return answer;
}