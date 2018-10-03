import axios from 'axios';


function determine(type, data) {
  return{
    type,
    data
  }
}

function fetch(type, url) {
  return dispatch => Promise.all([
    axios.get(url),
  ]).then(response => {
    dispatch(determine(type, response[0].data));
  })
  .catch(e => {
    return;
  })
}

function post(data, url) {
  return dipatch => Promise.all([
    axios.post( url, {
      data
    }).then(
      response => console.log(response)
    )
  ])
}

export {
  fetch,
  post,
}
