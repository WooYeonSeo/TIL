상속과 우선순위 결정
=============

[CSS 상속]
* 정의 : 상위에서 적용한 스타일은 하위에도 반영.
* 장점 :
 이로 인해 여러 단계로 중첩된 엘리먼트마다 매번 같은 색상과 글자 크기를 부여하지 않아도 됨.
* 단점
하지만 모든 CSS 속성이 이런 특징을 갖게 되면 문제 발생
 >> box-model이라고 불리는 속성들(width, height, margin, padding, border)과 같이 크기와 배치 관련된 속성들은 하위엘리먼트로 상속이 되지 않음.


[Cascading  = 속성의 우선순위에 따라 결정되는 것]
- 중복 또는 다른 셀렉터 같은 노드를 부르는 경우 어떤 경우로 적용되는지에 대한 규칙
1. 선언 방식에 대한 차이
inline > internal = external

2. 규칙들
+ 순서로 결정
<pre><code>
// example 1
<style>
span {
 color : red;
}
span {
 color : blue;
}
</style>
<span> TEXT </span>
</code></pre>
  result : blue 나중에 선언

+ 구체적인 선택으로 결정
<pre><code>
// example 2
<style>
span > div{
 color : red;
}
div {
 color : blue;
}
</style>
<span> <div>TEXT</div> </span>
</code></pre>
  result : red  bc 구체적으로 표현
    구체적이면 점수를 더 주기 때문에 선택되는 것 
    
+ id > class 의 우선순위
<pre><code>
// example 3
<style>
#A{ color : red; }
.B{ color : blue;}
div{ color: green; }
</style>
<span id="A" class = "B"> TEXT </span>
</code></pre>
  result : red  
    
 점수를 내는 시스템이 >> css specificity
 
** id가 1개 class가 10 개 있다고 class의 우선순위가 높아지는 것은 아님
