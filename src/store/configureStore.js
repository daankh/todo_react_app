import { createStore, combineReducers } from 'redux';
import todosReducer from '../reducers/todos';
import commentsReducer from '../reducers/comments';

export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
      comments: commentsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store
};