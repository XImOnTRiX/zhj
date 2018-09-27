import {
  FETCH_GALLERY,
  FETCH_SCROLLBOX,
  FETCH_COLLECTION,
} from '../actions/type';

const initState = {
  galleries: [1,2],
  filter: '',
  category: '',
  serviceList: { services: [] }
}

export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_GALLERY:
      return { ...state,
        galleries: action.data.entries.map((entrie) => {
          return (
            { title: entrie.titel, images: entrie.gallerys, categorys: entrie.gallerys.map((images) => { return images.meta.category; }) }
          )
        })
      };
    case FETCH_SCROLLBOX:
      return { ...state, serviceList: { services: action.data.services.split(',') }}
    default:
      return state;
  }
}
