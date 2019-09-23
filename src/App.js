import React from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";
import { addTodo, removeTodo } from './actions/todos';
import './App.css';

const store = configureStore();

//Add todo test
store.dispatch(addTodo({
  name: 'Do your work'
}));

const toRemove = store.dispatch(addTodo({
  name: 'Buy Food'
}));

store.dispatch(addTodo({
  name: 'Make coffee'
}));

console.log(store.getState())

//Remove todo test
store.dispatch(removeTodo({ id: toRemove.todo.id }))

console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
