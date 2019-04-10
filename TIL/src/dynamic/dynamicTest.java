package dynamic;

import java.util.Scanner;

public class dynamicTest {

  public static void main(String[] args) {
    // TODO Auto-generated method stub
    Scanner sc = new Scanner(System.in);
    
    int n = sc.nextInt(); // 2xn 넓이의 상자  //첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)
    int dp[] = new int[1001];
    dp[0] = 1;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
      // dp[i-1] 세로로 세웠을 때 그 이전값의 경우의수 dp[i-2]는 두개 가로랑 2*2를 세웠을 땨의 경우의 수
      dp[i] = dp[i-1] + 2*dp[i-2]; 
      dp[i] %= 10007;
    }
    
    System.out.println(dp[n]);
  }

}
