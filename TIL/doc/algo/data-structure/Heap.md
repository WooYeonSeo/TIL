

### 최대 힙 insert 
- 새로운 노드를 힙의 마지막 노드에 이어서 삽입한다.
- 부모노드와 비교해서 swap!

```javascript
process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
function Heap(){
    this.arr = [-1];
    this.length = 0;
}

Heap.prototype.getParentIndex = (idx)=>  Int(idx/2);
Heap.prototype.getLeftChildInded = (idx)=>  idx*2;
Heap.prototype.getRightChildInded = (idx)=> idx*2+1;

Heap.prototype.isEmptyArr = function() {
    if(this.length === 0) return true;
    return false;
};

Heap.prototype.swap = function(prevIdx, nextIdx){
    let temp = this.arr[prevIdx];
    this.arr[prevIdx] = this.arr[nextIdx];
    this.arr[nextIdx] = temp;
};

Heap.prototype.insert = function(data){
    if(this.isEmptyArr()){
        this.arr.push(data);
        this.length++;
        return;
    }
    this.arr.push(data);
    this.length++;

    for(let i= this.length ; i > 1; i=parseInt(i/2) ){
        let parentIdx = parseInt(i/2);
        if(this.arr[parentIdx] < this.arr[i]){
            this.swap(parentIdx,i);
        }else{
            break;
        }
    }
}

Heap.prototype.delete = function(){
    if(this.length ===0) return false;
    let head = this.arr[1]; //root 
    this.arr[1] = this.arr[this.length]; //root 
    this.length--;
    
    for(let i=0; i*2 <= this.length; ){
        // left right 보다 작으면 
        if (this.arr[i] > this.arr[i*2] && this.arr[i] > this.arr[i*2+1]) {
            break;
        }
        else if(this.arr[i*2] > this.arr[i*2+1]){
            this.swap(i, i*2);
            i=i*2;
        }
        else{
            swap(i, i*2+1);
            i = i*2+1;
        }
    }
    return head;
}

let heap = new Heap();

heap.insert(1);
heap.insert(7);
heap.insert(11);

console.log(heap.arr);


```
