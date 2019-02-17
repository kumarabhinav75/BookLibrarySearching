import {SEARCH_INPUT_CHANGE} from '../Actions/search.action';

export const searchInput = (state = '', action) => {
  switch(action.type) {
    case SEARCH_INPUT_CHANGE:
      return action.payload;
    default:
      return state;
  }
}