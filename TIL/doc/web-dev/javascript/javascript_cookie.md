## cookie in nodejs
1. 쿠키사용법 in req
    1. Req.cookies  : express 공홈
    2. Need cookie-parser middleware
2. Npm install cookie-parser
3. 모듈 불러오기 var cookieParser = require('cookie-parser'); 
4. 미들웨어 등록 app.use(cookieParser('23879ASDF234sdf@!#$a')); // 안에 값을 넣으면 변조됨 단 req.signedCookies로 써야함 res.cookie(‘count’,1); 
5. 서버에서 받는 방법  요청 받기 : req.cookies.count //req.cookies.count // 변조시 req.signedCookies 응답보내기 : res.cookie(‘count’,1);  // 변조시 : res.cookie(‘count’,1. {signed:true});
6.  쿠기가 없는 경우에 대한 예외처리  if(!req.cookis.count) count = 0;
7. 쿠키 예제 링크
https://github.com/egoing/server_side_javascript_tutorials/blob/master/app_cookie.js
