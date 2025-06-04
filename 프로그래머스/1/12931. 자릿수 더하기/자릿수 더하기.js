function solution(n)
{
    const arr = n.toString().split("");
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        arr[i] = Number(arr[i]);
        sum+=arr[i];
    }
    return sum;
}