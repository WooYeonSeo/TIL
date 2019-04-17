ARRAY
-----
+java기준
+선언, 값의 할당, 접근, 주의

1. 선언 
 + char[] str = new char[8]; // 또는 char str[] = new char[8];
 + char[] str2 = char[] str = new char[]{'s', 'o', 'f', 't', 'w', 'a', 'r', 'e'};

2. 값 할당
 <pre>
   str[0] = 'A';
 </pre>

3. 값 접근
  <pre>
    System.out.println(str[2])
    // 결과 : f
  </pre>

+ 주의
 ArryaIndexOutOfBoundsException 
 System.out.println(str) > 결과 : str 배열의 주소값
  