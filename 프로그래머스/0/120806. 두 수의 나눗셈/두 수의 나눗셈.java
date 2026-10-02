class Solution {
    public int solution(int num1, int num2) {
        double n1 = num1;
        double n2 = num2;
        System.out.println(n1/n2);
        
        double result = (n1 / n2) * 1000;
        System.out.println(result);
        
        return (int)result;
    }
}