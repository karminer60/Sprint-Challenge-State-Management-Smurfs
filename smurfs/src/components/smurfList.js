import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from 'react-loader-spinner';

import { fetchSmurf } from '../store/actions/getAction.js';

const Quote = props => {
  useEffect(() => {
    // call an action creator
    props.fetchSmurf();
  }, []);

  // if (props.isFetching) {
  //   return <Loader />;
  // }

  return (
    <div>
      <h1>Smurf</h1>
      {props.isFetching && (
        <Smurf type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.quote && <h3>"{props.quote}"</h3>}
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={props.fetchQuote}>Fetch a new quote</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    quote: state.quotes.quote,
    isFetching: state.quotes.isFetching,
    error: state.quotes.error
  };
};

export default connect(
  mapStateToProps,
  { fetchQuote }
)(Quote);
