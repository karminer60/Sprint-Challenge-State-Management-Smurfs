import axios from 'axios';
// thunks

export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';

// Redux is synchronous
// we need to perform an async operation
export const fetchSmurf = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_QUOTE_START' });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        // res.data.quote
        dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: res.data.quote });
      })
      .catch(err => {
        // message: err.response.data
        // status: err.response.status
        dispatch({
          type: 'FETCH_QUOTE_FAILURE',
          payload: `Error ${err.response.status}: ${err.response.data}`
        });
      });
  };
};

export const updateTitle = newTitle => {
  return {};
};