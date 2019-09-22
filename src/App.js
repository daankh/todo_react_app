import React from 'react';
import AppRouter from './routers/AppRouter'
import configureStore from "./store/configureStore";
import './App.css';

const store = configureStore();
console.log(store.getState())

function App() {
  return (
    <AppRouter />
  );
}

export default App;
