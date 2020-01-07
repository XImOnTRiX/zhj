import {
  FETCH_GALLERY,
  FETCH_SCROLLBOX,
  FETCH_COLLECTION,
  FETCH_TEAM,
  FETCH_SERVICE,
  FETCH_CARS,
  FETCH_BAGGER,
} from '../actions/type';

const initState = {
  gallerys: false,
  scrollBoxService: false,
  collection: false,
  team: false,
  fzService: false,
  cars: false,
  bagger: false,
}



export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_GALLERY:
      return { ...state, gallerys: true}
    case FETCH_TEAM:
      return { ...state, team: true}
    case FETCH_SERVICE:
      return { ...state, fzService: true}
    case FETCH_SCROLLBOX:
      return { ...state, scrollBoxService: true}
    case FETCH_COLLECTION:
      return { ...state, collection: true}
    case FETCH_CARS:
      return { ...state, cars: true}
    case FETCH_BAGGER:
      return { ...state, bagger: true}
    default:
      return state;
  }
}
