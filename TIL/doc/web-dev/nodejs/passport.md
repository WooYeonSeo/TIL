## passport LocalStrategy

### 로컬 로그인 등록해보기

1. 로그인으로 들어오는 url 정의

   ```javascript
   app.post('/login', 
   passport.authenticate('local', { 
     successRedirect: '/',
     failureRedirect: '/login' 
   }));
   
   ```

   - 로그인 후처리가 필요하면 다른 방식을 이용 

2. input namespace설정과 실제 로그인 로직 확인 부분 

   ```javascript
   passport.use(new LocalStrategy({
     usernameField: 'username',
     passwordField: 'password' // name filed customizing
   },
     (username, password, done)=>{
      
     }
   ));
   ```

   - 기본으로 설정되어있는 id pw name 값이 있다. 거기에 맞추거나 passport 미들웨어로 등록할 때 설정 값을 커스텀해 줄 수 있다.
   - 두번째 인자인 function 내부에서 로그인 확인을 구현한다. 로그인 인증이 완료되면 `done();` 을 실행한다

3. 로그인 상태 serializeUser

   ```javascript
   passport.serializeUser(function(user, done) {
     done(null, user.id);
   });
   ```

   - `done()` 으로 넘어온 값이 serailizeUser의 user로 넘어온다.
   - ` done(null, user.id);` null과 식별자(id, email)를 넘겨준다

4. deserializeUser : 페이지 방문할 때마다 호출되는 함수

   ```javascript
   passport.deserializeUser(function(id, done) {
     User.findById(id, function(err, user) {
       done(err, user);
     });
   });
   ```

   

5. 4번의  `done()`은  1번 successRedirect: '/', 의 request 객체로 간다.

   ```javascript
   /* 
   // 1번의 성공 실패 url setting
   passport.authenticate('local', { 
     successRedirect: '/',
     failureRedirect: '/login' 
   }));
   */
   
   router.get('/', (req,res)=>{
     let userid = req.user;
   });
   ```

6. 로그아웃 

   ```javascript
   router.get('/', (req,res)=>{
     req.logout();
     req.session.save(()=>{
       res.redirect('/');
     });
   });
   ```

   



