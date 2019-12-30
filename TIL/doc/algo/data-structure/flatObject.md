### flat arr

```javascript
function flatten(arr) {
    return arr.reduce((flattened, element) => (
        flattened.concat(Array.isArray(element) ? flatten(element) : element)
    ), [])
}
```

### Object 탐색
```javascript
const cody = { age: 23, gender: 'male' };

for (const key in cody) {
  if (cody.hasOwnProperty(key)) {
    const element = cody[key];
    console.log(element);
  }
}


for ( const prop in cody){
    console.log(prop, cody[prop]); // a 1, b 2, c 3
}
```
