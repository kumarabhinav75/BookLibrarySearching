export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const TOGGLE_DISLIKE = 'TOGGLE_DISLIKE';

export const toggleLike = (bookID) => ({
  type: TOGGLE_LIKE,
  payload: bookID,
})

export const toggleDisike = (bookID) => ({
  type: TOGGLE_DISLIKE,
  payload: bookID,
})

