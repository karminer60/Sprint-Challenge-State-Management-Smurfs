import React, { useState } from "react";
import { connect } from "react-redux";


const ContactForm = () => {
    const [data, setData] = useState();
    const { register, errors, handleSubmit } = useForm({
      mode: "onBlur",
    });
    const onSubmit = (data) => {
      setData(data);
    };
  
    return (
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name*</label>
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
  
          <div>
            <label htmlFor="age">Age*</label>
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

          <div>
            <label htmlFor="height">Age*</label>
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
  
          
          
          
          <input value="submit" type="submit" />
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  