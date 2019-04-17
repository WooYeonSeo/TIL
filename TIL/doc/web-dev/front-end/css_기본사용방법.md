css의 기본 사용 방법

* 형식
  선택자(selector), 프로퍼티, value
 span { backround : blue; }

* css를 파일에 추가하는 방식
 1. inline  : 태그 안에 넣는 방법으로 가장 우선순위가 높다. element.stlye 로 개발자 도구에 표현됨 
 2. internal : head 안에 css 를 넣는것. css 파일을 따로 관리하지 않고 벌도의 브라우저가 요청을 보내지 않는 장점이 있음
 **장점 : 
 3. external : 파일을 따로 빼서 관리
    <link rel="stylesheet" href="style.css">


우선순위
1. inline
2. external internal 동일 따라서 나중에 선언된 것이 반영

tip
구글은 해당 페이지에서 사용하는것은 internal 방식으로, 특정 이미지나 테마를 불러오는것은 external 방식으로 사용하는 것으로 추정



