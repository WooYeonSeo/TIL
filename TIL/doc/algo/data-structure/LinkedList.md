```javascript

function LinkedList(){
    this.length = 0;
    this.head = null;
}
function Node(data){
    this.data = data;
    this.next = null;
}

LinkedList.prototype.append = function(data){
    
    let node = new Node(data); 
    let curr;

    // 시작점이 없을 때 처리 
    if(this.head == null){
        this.head = node;
        return;
    }
    curr = this.head;
    while(curr.next){
        curr = curr.next;
    }
    curr.next = node;
    this.length++;
};

const list = new LinkedList();
list.append(1);
list.append(0);
list.append(2);

LinkedList.prototype.indexOf = function(data){
    
    let curr = this.head, index = -1;
    while(curr){ 
        if( curr.data === data ){ 
            return index; 
        } 
        index ++; 
        curr = curr.next; 
    }
    return index;
};



// delete by idx
LinkedList.prototype.removeAt = function(idx){
    if( idx <= -1 || idx >= this.length ) {
        console.log("idx=",idx," length=",this.length);
        return null;
    }
    let curr = this.head; 
    let prev, index = 0;
    if(idx === 0){
         this.head = curr.next;
    }else{
        while( index++ < idx ){ 
            prev = curr; 
            curr = prev.next; 
        } 
        prev.next = curr.next;
    }
    
    this.length --; 
    curr.next = null;
    return curr.data;
};

LinkedList.prototype.remove = function(data) { 
    let index = this.indexOf(data); 
    return this.removeAt(index); 
};
let idx = list.remove(0);
// console.log("??",idx);

```
