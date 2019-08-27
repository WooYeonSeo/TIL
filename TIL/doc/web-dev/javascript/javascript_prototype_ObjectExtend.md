

## what is prototype, prototype link(__proto__)
### prototype 프로퍼티 
 - 모든 함수는 객체로서 prototype 프로퍼티를 갖는다
 - 함수가 생성될 때 만들어지며 constructor프로퍼티하나를 갖는 객체를 가리킨다.
 - 즉 prototye과 constructor는 서로를 참조한다.
 
**[같은내용 다시설명]**
1. 함수 선언
2. 함수에 prototype객체 같이 생성
3. prototype객체는 constructor를 갖는데 이는 함수를 다시 참조.(프로토타입 객체와 매핑된 함수를 확인 가능)

![](https://i.imgur.com/6Chcxm2.png)
---
### prototype link 
-  자신의 부모인 프로토타입 객체를 가리키는 프로퍼티
-  prototype 객체와는 다르게 모든 객체가 갖는다.
-  chrome에서는 __proto__로 사용

1. 함수 선언 
2. 위와 같이 prototype 객체가 생성되고 prototye과 constructor는 서로를 참조
4. **1번 함수로 객체 생성**
5. **prototype 프로퍼티가 가리키는 프로토타입 객체를 __proto__로 연결**
![](https://i.imgur.com/6zO4wRA.png)
 > 객체를 생성하는 건 생성자 함수로 실행되고, 실제 값 참조는 prototype객체. 즉 __proto__ 가 가리키는 prototype객체이다. 

## prototype  상속

자바스크립트의 프로토타입 상속은 기본 프로토타입을 맞춤형 프로토타입으로 대체할 때 그 진가가 드러난다.

chimps 객체와 더불어 bonobo객체를 생성


### new 
1. 오브젝트를 만들되 그 안에 proto 등의 속성에 함수의 프로토타입객체를 지정한다.
2. 함수의 컨텍스트를 방금 만든 오브젝트로 해서 생성시의 인자객체를 전달하여 호출한다.
3. 만약 생성자의 호출결과가 null이 아닌 객체라면 instance를 그 결과가 된다.

```javascript=
var instance = new Test();
instance = {
  __proto__:Test.prototype
};
var result = Test.apply( instance, arguments );
if( result && typeof result == 'object' ) instance = result;
```

### prototype 상속
```javascript=
function create_object(o){
    function F(){}
    F.prototype = o;
    return new F();
}
```
> Object.create(); 와 동일하다 
> 
```javascript=
//사용 예시

let animal = {
    species : '',
    getSpecies : ()=>{
        return this.species
    },
    setSpecies : (species) =>{
        this.species = species;
    }
};

let maltiz = create_Object(animal);

maltiz.setSpecies('dog');
```
1. create_Object 내부함수의 prototype을 animal 객체로 연결
2. 내부함수의 객체를 생성. 1번에서 내부함수의 prototype을 animal객체로 연결하였으므로 __proto__ 도 animal의 prototype객체를 가리킨다.
 + 왜? : __proto__는 객체 생성시 prototype 프로퍼티가 가리키는 프로토타입 객체로 연결되기 때문이다.
3. maltiz객체는 animal객체를 상속받는 객체가 됨.
  - prototype chain에 의해서 animal 객체의 속성들에 접근 가능 


### 자식 객체의 확장 : extend()
```javascript=
let addedObject = {
    setSound : function(sound){
        this.sound = sound;
    },
    getSound : function(){
        return this.sound;
    }    
}
extends(maltiz, addedObject);
```
 
 