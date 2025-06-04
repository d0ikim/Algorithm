function solution(n) {
    var arr = n.toString().split("");
    let answer = [];
    for(let i=arr.length-1; i>=0; i--) {
        arr[i] = Number(arr[i]);
        answer.push(arr[i]);
    }
    return answer;
}