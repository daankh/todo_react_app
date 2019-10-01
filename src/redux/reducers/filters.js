import { SHOW_ALL, SHOW_DONE, SHOW_OPEN } from '../actions/filters';

const filtersReducerDefaultState = {
  show: 'all',
}

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return {
        ...state,
        show: action.show,
      };
    case SHOW_DONE:
      return {
        ...state,
        show: action.show,
      };
    case SHOW_OPEN:
      return {
        ...state,
        show: action.show,
      };
    default:
      return state;
  }
}