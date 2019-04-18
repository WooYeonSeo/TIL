07 float 와 box modeling
-----------------------

1. float 
 * 기존의 배치에서 예외로 둥둥 떠있는 것 
 * 띄워서 왼쪽으로 보내기 외른쪽으로 보내기
 <pre>
 <style>
 .blue{background-color:blue;}
 .green{
   background-color:green;
   float:left; 
 }
 .red{background-color:red;}
 
 </style>
 <html>
  <div class="blue">1</div>
  <div class="green">2</div>
  <div class="red">3</div>
 </html>
 </pre>
 - green 이 float:left 가 되면서 그 공간이 붕 뜬 것으로 인식 red가 green 아래로 오게 됨 .
 - z 축으로 떠있는 개념이지만 2차원에서는 볼 수가 없으므로 배치에 활용 가능 
 + **단 자식이 float 인 경우 붕 떠있기 때문에 자식으로 생각하지 않음. 따라서 그 부모에 배경을 주는 경우 색이 없을 수 있다. 따라서 overflow를 주어서 float를 인식하게 함.** 
    overflow : hidden; 또는 hidden;
 + float 속성을 해제 'clear:both' 
  
 2. Box Modeling : margin border padding 
  * margin : element 간의 간격
  * border : 구역을 표시
  * padding : 컨텐츠와의 간격
  * box-shadow : border 밖에 테두리를 그릴 수 있는 속성입
  + 표기 : margin : {0 0 0 10px};
 
 3. Element Size
   * block에서 자식의 width는 부모의 width 를 따라감 
   
 4. ** Box Sizing **
 * padding 속성을 늘리면 엘리먼트의 크기가 달라짐 
 * box-sizing : border-box로 엘리먼트의 크기를 고정하면서 padding 값만 증가 (컨텐츠 표현 가능 범위 내)
 - 기본값은 contents-box
 
 css-grid flex 속성들이 추가되고 있지만 브라우져별 지원 현황 확인 하기
 
 
 
