import {
  FETCH_GALLERY,
  FETCH_SCROLLBOX,
  FETCH_COLLECTION,
  FETCH_TEAM,
} from '../actions/type';

const initState = {
  galleries: [1,2],
  filter: '',
  category: '',
  serviceList: { services: [] },
  serviceCollection: {entries:[]},
  team: {entries:[]},
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
    case FETCH_COLLECTION:
      return { ...state, serviceCollection: action.data };
    case FETCH_TEAM:
      return { ...state, team: action.data };
    default:
      return state;
  }
}
