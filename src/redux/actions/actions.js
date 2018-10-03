import axios from 'axios';

import {
  FETCH_GALLERY,
  FETCH_SCROLLBOX,
  FETCH_COLLECTION,
  POST_FEEDBACK,
  /* TEST */
  FETCH_FEEDBACK,
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

function fetchCollection(data) {
  return{
    type: FETCH_COLLECTION,
    data
  }
}

function postFeedback(data) {
  return{
    type: POST_FEEDBACK,
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

function fetchCollectionService(url1) {
  return dispatch => Promise.all([
    axios.get(url1),
  ]).then(response => {
    dispatch(fetchCollection(response[0].data));
  })
  .catch(e => {
    return;
  })
}

/* TEST  */

function fetchFeeback(data) {
  return {
    type: FETCH_FEEDBACK,
    data
  }
}

function postFeedbackTo(data, url) {
  return dipatch => Promise.all([
    axios({
      method: 'post',
      url: url,
      data: data,
    })
  ])

}

function fetchFeebackCollection(url1) {
  return dispatch => Promise.all([
    axios.get(url1),
  ]).then(response => {
    dispatch(fetchFeeback(response[0].data));
  }).catch(e => {
    return;
  })
}

export {
  fetchGallerys,
  fetchScrollBoxService,
  fetchCollectionService,
  postFeedback,
  /* TEST */
  fetchFeebackCollection,
  postFeedbackTo,
}
