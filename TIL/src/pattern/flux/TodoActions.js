var TodoActions = {
    create(text) {
      AppDispatcher.dispatch({
        actionType: Constants.TODO_CREATE,
        text : text
      });
    },
    destroy(id) {
      AppDispatcher.dispatch({
        actionType: Constants.TODO_DESTROY,
        id : id
      });
    }
  };
  
  // 리액트 컴포넌트에서 새 Todo 항목을 작성할 때
  TodoActions.create(text);