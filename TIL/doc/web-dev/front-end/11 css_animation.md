### 애니메이션 
  - 16.6 millisecond마다 브라우저가 랜더링되므로 애니메이션 setinterval 을 16.6초로 주로 준다.
  - settimeout재귀적, setinterval 도 충분해 반복적임 하지만 일하는 축이 하나여서 애니메이션이 끊길 수 있다.
  - requestAnimationFrame() 을 이용해서 처리하면 보다 부드러운 처리가 가능하다. 이유는 랜더링 시점 이후에 바로 불러지기 때문.
문제 
  - 브라우저 렌더링 과정 : [더 공부]
      - **JavaScript 실행 -> layout 계산 -> render tree -> paint -> composite**
      - css 이후에 처리되는게 아니라 transform : transateXX(); scale, rotate, opacity 등을 이용하면 composite 단계에서 변화를 주기 때문에(gpu에서 처리되기 때문) 속도를 개선할 수 있다.
  - 애니메이션을 어떻게 최적화 해요? hint gpu 가속
  
  - 더 공부해보자 : requestAnimationFrame 이 언제 호출이 되는지. 
    requestAnimationFrame 인자로로 들어간 callback이 브라우저가 갱신될 때 자동으로 실행됨. 그래서 최적화 가능 [더찾아보자]

#### transition, transform
- transition : 스르륵감
- transform : 이동 - translate 
- transition position을 읽어와서 계속 바꿔줘야하는데 이걸 string parser로 해줘야 한다.
- transition end 라고 이벤트를 닫아주는 이벤트가 있다.
