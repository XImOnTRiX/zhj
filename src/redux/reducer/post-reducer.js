import {
  POST_FEEDBACK,
} from '../actions/type';

const initState = {
  post:'',
}

export default function (state = initState, action) {
  switch (action.type) {
    case POST_FEEDBACK:
    console.log(state);
      return action.data;
      break;
    default:
      return state;

  }
}
