## Node session
### 세션이란 
사용자의 컴퓨터에 쿠키방법으로 데이터를 저장 하는데 그때 아이디값만 저장이 된다. 실제 데이터는 서버에 저장이 되어있다. 사용자가 식별할 수 있는 식별자만 클라이언트에서 가지고 인증하는 방식. 데이터는 서버에 있다.
### 사용이유 
 - cookie는 사용자 컴퓨테에서 쿠키의 중요정보가 탈취당할 수 있음 왜냐면 공개되어있기 때문에 암호화를 하더라도 암호화된 상태로 보내버리면 뚫리기 때문이다.
 - 사용자 정보 자체에 쿠키값이 저장되지는 않아서 안정성이 높다. Session id 자체에는 의미있는 정보가 없다. 사용자의 식별자가 오게되면 로그인된 상태인지 확인해서 화면에 보여준다.
 - 클라이언트에서 카운트 값을 받기는하지만 보내지는 않는다.

### 사용방법 
> 쿠키는 헤더정보에 set-Cookie에 key value형태로 담아서 보낸다.
> 세션은 헤더정보에 set-cookie에 connect.sid = 가 있다. 고유한 값을 전달하고있다. sid값을 계속 보내서 해당 벨류가 같은 것은 같은 사용자라고 볼 수 있다. 
> Connect.sid를 이용해서 사용자를 구분해서 카운트 값을 저장해 놨다가 해당 sid로 들어오면 서버의 해당 sid의 count객체에 접근해서 값을 변경하는 것.

#### **[how to use : app_session.js]**
1. npm install express-session —save 
2. Const session = require(‘express-session’);
3. 미들웨어에 등록 
```javascript
app.use(session({
  secret: 'keyboard cat', // 해당 키값을 이용해서 값을 변조
  resave: false, // 권장값 
  saveUninitialized: true, // session id 를 실제로 사용하기 까지 발급하게 하지 않는다
  cookie: { secure: true } 
}))
```
4. Use   // connect.sid로 접근하는 사용자는 count에 접근 할 수 있다.  요청받아서 서버에서 작업 : req.sessio.cont = 1;  // 해당 sid 계정의 세션 값을 저장하는 것 동시에 값을 읽어올수도 있다. res.send({count : req.session.count});

#### **그렇다면 어디에 저장이되는가**
 : express-session 모듈은 메모리에 저장한다 따라서 서버 재부팅하면 세션값이 날아간다. 따라서  사용자 작업중에서는 
실제로 사용할때는 데이터베이스에서 세션값을 직접 저장하는 것을 해야한다.
``` javascript 
app.use(session({
  secret: '1234DSFs@adf1234!@#$asd',
  resave: false,
  saveUninitialized: true,
  // 설정 - 이 때 파일로 session이라는 파일로 데이터 디렉토리를 생성 (서버 구동할 때 ) 파일이름이 id 
  // 디비나 파일에 따라서 저장위치를 설장해준다. 
  store:new FileStore()
}));
```
+ 주의 : redirect 시 변경된 세션값이 반영이 되지 않을 수 있어서 save() 를 이용해서 저장 후 콜백함수에서 보내야 한다.