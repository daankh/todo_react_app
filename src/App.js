import React from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";
import { addTodo } from './actions/todos';
import './App.css';

const store = configureStore();

store.dispatch(addTodo({
  name: 'Do your work'
}));

console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
