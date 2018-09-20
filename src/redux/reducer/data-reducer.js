import {
  TEST
} from '../actions/type';

const initState = {
  loading: true,
}

export default function(state = initState, action) {
  switch(action.type) {
    case TEST:
      return state;
    default:
      return state;
  }
}
