import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTeaClicked(props.id)}>
        <h3>{props.name} - {props.origin} - {props.price}</h3>
        <p><em>{props.roast}</em></p>
        <hr />

      </div>


    </React.Fragment>
  )
}

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  //id: PropTypes.string, // new PropType
  whenTeaClicked: PropTypes.func // new PropType
};

export default Tea;