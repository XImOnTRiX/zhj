import {
  FETCH_GALLERY
} from '../actions/type';

const initState = {
  galleries: [1,2],
  filter: '',
  category: ''
}

export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_GALLERY:
    console.log(state);
      return { ...state,
        galleries: action.data.entries.map((entrie) => {
          return (
            { title: entrie.titel, images: entrie.gallerys, categorys: entrie.gallerys.map((images) => { return images.meta.category; }) }
          )
        })
      };
    default:
      return state;
  }
}
