import axios from 'axios';

import {
  FETCH_GALLERY,
} from './type';

function fetchGallery(data) {
  return {
    type: FETCH_GALLERY,
    data
  }
}

function fetchGallerys(url1) {
  return dispatch => Promise.all([
    axios.get(url1),
  ]).then(response => {
    dispatch(fetchGallery(response[0].data));
  })
  .catch(e => {
    return;
  })
}

export {
  fetchGallerys,
}
