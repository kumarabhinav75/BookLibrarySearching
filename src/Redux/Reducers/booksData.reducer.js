import {INITIALIZE_STORE_BOOKS} from '../Actions/bookdata.action';

export const booksData = (state = [], action) => {
  switch (action.type) {
    case INITIALIZE_STORE_BOOKS:
      return state.concat(action.payload);
    default: 
      return state;
  }
}