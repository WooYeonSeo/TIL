CSS 기본 Style 변경하기
---------------------
폰트사이즈
-pixel 과 em
 *pixel : 16px 이 기본값
 *em : pixel 기본값 에 대한 배율 값
 * em 의 기준
 <pre>
	<head>
	  <style>
	    body > div {
	      font-size:32px;
	      background-color: #ff0;
	      font-family:"Gulim";
	    }
	    .myspan {
	      color : #f00;
	      font-size:1em;
	    }
	  </style>
	</head>
	<body>
	  <div>
	    <span class="myspan">my text is upper!</span> // 32px;
	  </div>
	</body>
	</html>
 </pre>
  > myspan 은 body > div에서 상속받은 폰트사이즈를 기본으로 하기 때문에 기준값 32px 에 대한 배율로 결정된다.
  
폰트
폰트 설정시 순서대로 우선순위.
띄어씌기 있는경우 때문에  "" 로 묶자
  
