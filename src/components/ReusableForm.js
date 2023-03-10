import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {


  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Tea Name" />
        <input
          type="text"
          name="origin"
          placeholder="origin" />
        <input
          type="number"
          name="price"
          placeholder="price in $" />
        <input
          type="text"
          name="roast"
          placeholder="roast for ... days" />

        <input
          type="number"
          name="pounds"
          placeholder="pounds"
          value={130} />

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;