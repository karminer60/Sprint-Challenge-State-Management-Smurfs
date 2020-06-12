import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './smurf.js';

import { fetchSmurf } from '../store/actions/getAction.js';

const SmurfList = props => {
  

  // if (props.isFetching) {
  //   return <Loader />;
  // }

  return (
    <div className="smurf-list">
      {props.thingsToDo.map(item => (
        <Smurf key={item.id} item={item} dispatch={props.dispatch} />
      ))}
      

    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf }
)(SmurfList);
