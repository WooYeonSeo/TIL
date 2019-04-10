package dynamic;

import java.util.Scanner;

public class dynamicTest {

  public static void main(String[] args) {
    // TODO Auto-generated method stub
    Scanner sc = new Scanner(System.in);
    
    int n = sc.nextInt(); // 2xn ������ ����  //ù° �ٿ� n�� �־�����. (1 �� n �� 1,000)
    int dp[] = new int[1001];
    dp[0] = 1;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
      // dp[i-1] ���η� ������ �� �� �������� ����Ǽ� dp[i-2]�� �ΰ� ���ζ� 2*2�� ������ �x�� ����� ��
      dp[i] = dp[i-1] + 2*dp[i-2]; 
      dp[i] %= 10007;
    }
    
    System.out.println(dp[n]);
  }

}
