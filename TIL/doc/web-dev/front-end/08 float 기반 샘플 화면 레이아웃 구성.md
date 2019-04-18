float 기반 샘플 화면 레이아웃 구성
-------------------------
 목표 크게 세가지로 구성된 웹페이지
 
 <a href="">소스코드</a>
 
 + ** 자식이 float 인 경우 붕 떠있기 때문에 자식으로 생각하지 않음. 따라서 그 부모에 배경을 주는 경우 색이 없을 수 있다. 따라서 overflow를 주어서 float를 인식하게 함.** 
    overflow : hidden; 또는 hidden;
    overflow 추가로 더 찾아보기.
 + float 속성을 해제 'clear:both' 