import React from 'react';

import { fetchSmurf } from '../store/actions/getAction.js';


const Smurf = props => {
    useEffect(() => {
        // call an action creator
        props.fetchSmurf();
    }, []);
    return (
        <div>
            <p>{props.item.name}</p>
        </div>
    );
};

export default Smurf;