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
  galleries: [1,2],
  filter: '',
  category: '',
  serviceList: {
    services: [
      '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
    ],
    exo: true
  },
  serviceCollection: {entries:[]},
  team: {
    entries: [
      {title: '1', image: ''},
      {title: '1', image: ''},
      {title: '1', image: ''},
      {title: '1', image: ''},
      {title: '1', image: ''},
      {title: '1', image: ''},
    ],
    exo: true
  },
}

export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_GALLERY:
      return { ...state,
        galleries: action.data.entries.map((entrie) => {
          return (
            {
              title: entrie.titel,
              images: entrie.gallerys,
              categorys: entrie.gallerys.map((images) =>
              {
                if( images.meta.category === "" || images.meta.category === undefined ) {
                  return false;
                } else {
                  return images.meta.category;
                }
              })
            }
          )
        })
      };
    case FETCH_SCROLLBOX:
      return { ...state, serviceList: { html: action.data.services }, exo: false }
    case FETCH_COLLECTION:
      return { ...state, serviceCollection: action.data };
    case FETCH_TEAM:
      return { ...state, team: action.data };
    case FETCH_SERVICE:
      return { ...state, mainServices: action.data };
    case FETCH_CARS:
      return { ...state, cars: action.data };
    case FETCH_BAGGER:
      return { ...state, bagger: action.data };
    default:
      return state;
  }
}
