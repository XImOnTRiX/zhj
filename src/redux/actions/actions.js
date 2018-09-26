import axios from 'axios';

import {
  FETCH_GALLERY,
  FETCH_SCROLLBOX,
} from './type';

function fetchGallery(data) {
  return {
    type: FETCH_GALLERY,
    data
  }
}

function fetchScrollBox(data) {
  return{
    type: FETCH_SCROLLBOX,
    data
  }
}

function fetchScrollBoxService(url1) {
  return dispatch => Promise.all([
    axios.get(url1),
  ]).then(response => {
    dispatch(fetchScrollBox(response[0].data));
  })
  .catch(e => {
    return;
  })
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
  fetchScrollBoxService,
}
