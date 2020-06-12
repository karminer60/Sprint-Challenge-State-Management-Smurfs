import React, { useState } from "react";
import { connect } from "react-redux";

// TODO:
// - add redux flow for toggling the editing state
// - add redux flow for updating the title
const Title = props => {
  const [newTitleText, setNewTitleText] = useState();
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title} <i className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button>Update title</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    title: state.titleReducer.title,
    editing: state.titleReducer.editing
  };
};

export default connect(
  mapStateToProps,
  {}
)(Title);
