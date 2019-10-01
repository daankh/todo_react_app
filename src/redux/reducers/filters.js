import { SHOW_ALL, SHOW_DONE, SHOW_OPEN } from '../actions/filters';

const filtersReducerDefaultState = {
  filter: 'all',
}

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return {
        ...state,
        filter: action.filter,
      };
    case SHOW_DONE:
      return {
        ...state,
        filter: action.filter,
      };
    case SHOW_OPEN:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}