import React from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";
import { addTodo, removeTodo, editTodo, addComment } from './actions/todos';
import './App.css';

const store = configureStore();

//Add todo test
const toEdit = store.dispatch(addTodo({
  name: 'Do your work',
  description: 'description of task 1',
  comments: ['some comment', 'some comment 2'],
}));

const toRemove = store.dispatch(addTodo({
  name: 'Buy Food', description: 'desc 1'
}));

store.dispatch(addTodo({
  name: 'Make coffee',
  timestamp: 300000000,
  done: false,
  description: 'Some description',
  comments: ['some comment', 'some comment 2', 'some comment 3'],
}));

store.dispatch(addTodo({
  name: 'Call too..',
  timestamp: 300000000,
  done: false,
  description: 'Some description',
  comments: [],
}));

const toAddComment = store.dispatch(addTodo({
  name: 'Take a walk',
  timestamp: 300000000000,
  done: false,
  description: 'Some description of task 4',
  comments: [],
}));

// console.log(store.getState())

//Remove todo test
store.dispatch(removeTodo({ id: toRemove.todo.id }))

// console.log(store.getState())

//Edit todo test
const toEditCopy = {
  ...toEdit.todo,
  name: 'Ride a bikeee',
  timestamp: 200000000000,
}

store.dispatch(editTodo(toEditCopy))

//Add comment test
const comment = 'new comment';
store.dispatch(addComment(toAddComment.todo, comment));

console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
