Layout 작업 =CSS 랜더링 
* 위에서 아래로 순서대로 배치되는 것이 일반적
* 선언하지 않으면 기본 주어진 속성대로 보여짐, 대부분 display block inline을 기억하는게 편함
* 배치를 위한 속성 : 
  - display(block, inline, inline-block) :태그들은 기본적인 display 속성을 가지고 있음 div,p-block, span-inline
  - position (static, absolute, relative, absolute)
  - float(left, right)
  
  1. display
  + Block : 위에서 아래로 쌓임
  <pre>
  <div> block1 </div>
  <p> block2 </p>
  <div> block3 </div>
  </pre>
  > 결과 : 순서대로 쌓인다.
  
  +inline : span, strong, a
  <pre>
  <style>
  *{ display: inline;}  
  </style>
  <div> block1 </div>
  <p> block2 </p>
  <div> block3 </div>
  </pre>
  </pre>
  > 결과 : 오른쪽으로 쭉 붙어서 생김 
  
  2. position : 조금 특별한 배치를 하는 방법 
  + static : 기본값.
  + absolute : top left right bottom으로 기준점으로 움직임. 기준점 : 상위 element 중 static이 아닌 것 
  + relative : 자기가 위치해야 할 곳을 기준으로 상대적인 위치를 지정 (top left right bottom - 조건 안주면 static 위치랑 같음) 
  + fixed : 위치 자체가 보여지는 화면에서 고정 (광고)
  
  3.margin : element의 간격
  ```
  <style>
   *{
   margin : 0 0 10px 0;
   }
  </style>
  ```
  +추가
  css는 주석 1로도 처리됨
  p tag 기본 여백있음