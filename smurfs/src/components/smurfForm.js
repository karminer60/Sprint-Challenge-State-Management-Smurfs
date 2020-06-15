import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { fetchSmurf } from '../store/actions/getAction.js';


const SmurfForm = (props) => {
  
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
 
  const onSubmit = newSmurf => {

    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        props.fetchSmurf()

      })
      .catch(err => {
        debugger
      })
  }


  return (
    <div className="smurf-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name*&nbsp;</label>
          <input
            id="name"
            name="name"
            placeholder="Smurf"
            ref={register({ required: true, maxLength: 20 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.name.type}</p>
          )}
        </div>

        <br/>

        <div>
          <label htmlFor="age">Age*&nbsp;</label>
          <input
            id="age"
            name="age"
            placeholder="100"
            ref={register({ required: true, maxLength: 20 })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.age.type}</p>
          )}
        </div>
        
        <br/>

        <div>
          <label htmlFor="height">Height*&nbsp;</label>
          <input
            id="height"
            name="height"
            placeholder="5cm"
            ref={register({ required: true, maxLength: 20 })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.height.type}</p>
          )}
        </div>


        <br/>

        <input value="submit" type="submit" />
      </form>
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
  {fetchSmurf}
)(SmurfForm);
