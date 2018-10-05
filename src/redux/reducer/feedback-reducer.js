import {
  SAVE_CONTENTEDITABLE,
} from '../actions/type';

const initState = {
  comment: '',
  rating: '',
}



export default function(state = initState, action) {
  switch(action.type) {
    case SAVE_CONTENTEDITABLE:
      return { ...state, comment: action.data.replace(/<\/?[a-z][^>]*\/?>/ig, ''), rating: action.data }
    default:
      return state;
  }
}
