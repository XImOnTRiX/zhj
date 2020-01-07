import {
  POST_FEEDBACK,
} from '../actions/type';

const initState = {
  post:'',
}

export default function (state = initState, action) {
  switch (action.type) {
    case POST_FEEDBACK:
      return action.data;
    default:
      return state;

  }
}
