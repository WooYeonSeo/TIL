
### dependency injection - 더 정리해보자
 - promise의 resolve 가 되면 then 의 콜백함수가 실행됨
 - then은 비동기 함수가 끝났을 때의 콜백함수의 실행 순서를 정해준다.
 - then.then 메소드 체이닝, promise를 리턴해서 체이닝 가능 
 - then의 콜백함수들은 실행순서와 관련되어있고 내부로 호출된다.
 - promise all은 드물게 여러 api에서 데이터 받아와서 처리하는 경우
 - race 더 빠른 응답으로 처리하는것 
 - 받은걸 파싱해서 다시 fetch하면 then에서 처리 (생각보다 많지는 않음)
 - 예) 주문리스트 받아와서 파싱해서, 재고 확인 url로 보내는경우도 있기는 함. - api 서버를 분리한 경우