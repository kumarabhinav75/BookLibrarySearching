import {SEARCH_BY_AUTHOR, SEARCH_BY_BOOKNAME} from '../Actions/search.action';

export const searchFilter = (state = '', action) => {
  switch(action.type){
    case SEARCH_BY_AUTHOR:
      return 'Author';
    case SEARCH_BY_BOOKNAME:
      return 'Name';
    default:
      return state;
  }
}
