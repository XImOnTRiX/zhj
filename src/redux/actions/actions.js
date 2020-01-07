import axios from 'axios';


function determine(type, data) {
  return{
    type,
    data
  }
}

//var promises = Array.isArray(url) ? url.map(singleUrl => axios.get(singleUrl)) : axios.get(url);

function fetch(type, url) {
  return dispatch =>
  axios.get(url)
  .then(response => {
    dispatch(determine(type, response.data));
  })
  .catch(e => {
    return;
  })
}

function post(data, url) {
  return dispatch =>
  axios.post( url, {
    data
  })
}


export {
  fetch,
  post,
  determine,
}
