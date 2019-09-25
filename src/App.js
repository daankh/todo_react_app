import React from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";
import { addTodo, removeTodo, editTodo } from './actions/todos';
import { addComment } from './actions/comments';
import './App.css';

const store = configureStore();

//Add todo test
const toEdit = store.dispatch(addTodo({
  name: 'Do your work',
  description: 'description of task 1',
}));

const toRemove = store.dispatch(addTodo({
  name: 'Buy Food', description: 'desc 1',
  done: true,
}));

store.dispatch(addTodo({
  name: 'Make coffee',
  timestamp: 300000000,
  done: true,
  description: 'Some description',
}));

store.dispatch(addTodo({
  name: 'Call too..',
  timestamp: 300000000,
  done: false,
  description: 'Some description',
}));

const toAddComment = store.dispatch(addTodo({
  name: 'Take a walk',
  timestamp: 300000000000,
  done: false,
  description: 'Some description of task 4',
}));

// console.log(store.getState())

//Remove todo test
store.dispatch(removeTodo({ id: toRemove.todo.id }))

// console.log(store.getState())

//Edit todo test
const toEditCopy = {
  ...toEdit.todo,
  name: 'Ride a bike',
  timestamp: 200000000000,
}

store.dispatch(editTodo(toEditCopy))

//Add comment test
const comment = 'new comment';
store.dispatch(addComment(toAddComment.todo.id, comment));
store.dispatch(addComment(toAddComment.todo.id, 'some different'));

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
