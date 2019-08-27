## class 기반 상속
 : 객체 리터럴 상속을 class function에 적용한 것 
 
### 방법1 :
``` javascript
    function Persion(arg){
        this.name = arg;
    }
    Person.prototype.setName = function(value){
        this.name = value;
    }
    
    function Student(arg){
        // Person.apply(this,arg);
    }
    
    let you = new Person('yeon');
    Student.prototype = you;
    
    let me = new Student('hun');
    me.setName('hun');
```
[동작원리]
1. 부모 (Person)객체 생성
2. 자식 function의 prototype을 부모 객체에 연결
3. 앞으로 생성되는 자식 객체는 부모 class에 접근 가능 

문제가 있다 : me 를 생성할 때 부모생성자인 Person의 생성자를 호출하지 않아서 new Student에서 이름이 들어가지 않음.
해결책 : Person.apply(this,arg);


### 방법2 
```javascript=
    function Persion(arg){
        this.name = arg;
    }
    Person.prototype.setName = function(value){
        this.name = value;
    }
    
    function Student(arg){
        // Person.apply(this,arg);
    }
    
    
    // 중재자 
    // 1번
    function F(){}
    F.prototype = Person.prototype;
    // 2번
    Student.prototype = new F();
    Student.prototype.constructor = Student;
    // 3번
    Student.super = Person.prototype;
    
    let you = new Person('yeon');
      
    let me = new Student('hun');

```
> 1. 부모 class를 가리키는 연결 생성
> 2. 부모와 연결된 빈 객체와 연결
> 3. 연결된 빈객체 생성자 연결 

장점 : 클래스의 객체들이 독립적으로 유지 

``` javascript

var inherit = function(Parent,Child){
    var F = function(){};
    return function(Parent,Child){
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.super = Parent.prototype;
    }
}();
```
> F는 closer로 지속적으로 값이 참조 가능하면서, 한번만 생성되어 inherit 함수가 계속 호출되어도 생성을 새로 하지 않아도 됨 ****