
### dependency injection 
- html templete주입
    - 디커플링을 하는 방법으로 객체 주입을 했는데 다른 방법은 뭐가 있지??
    - 객체를 주입

    ``` javascrpit
    new populationAndTopic({
        visualView : new CloudWorldVisualUI();
    })

    class populationAndTopic{
        constructor(view){
            this.view = view;
        }

        rightVisaulView(){
            new this.view(targetNode);
        }

        render(){
            this.rightVisaulView();
        }
    }

    ```
    
    



### tempete literal

```javascript=
const getCard = (data) =>{
    return `<div>${data.name}</div>`
}

getCard({name:'boostcamp'});
```

- 탬플릿 파일로 빼거나
```javascript
const tpls = {
    getCard(data){
        return '<div> template card </div>'
    }
}
```
- 클래스 안에 보관하거나
- 인자로 넣어줄 수도 있음
