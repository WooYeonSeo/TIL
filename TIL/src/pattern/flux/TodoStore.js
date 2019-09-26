var TodoStore = Object.assign({}, EventEmitter.prototype, {

  });
  
  // TODO 항목 작성
  function create(text) { 
    console.log("todo store ", text);
   }
  
  // TODO 항목 삭제
  function destroy(id) { console.log("todo destroy id ", id); }
  
  // 스토어를 업데이트하는 ​콜백 함수 등록
  AppDispatcher.register(function(action){
    switch(action.actionType) {
      case Constants.TODO_CREATE:
        create(action.text);
        TodoStore.emitChange();
        break;
      case Constants.TODO_DESTROY:
        destroy(action.id);
        TodoStore.emitChange();
        break;
    }
  });