import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './smurf.js';

import { fetchSmurf } from '../store/actions/getAction.js';

const SmurfList = props => {
    useEffect(() => {
        
        props.fetchSmurf();
      }, []);

  
  return (
    <div className="smurf-list">
      {props.smurfList.map(item => (
        <Smurf key={item.id} smurf = {item} />
      ))}
      

    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfList: state.smurfList
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf }
)(SmurfList);
