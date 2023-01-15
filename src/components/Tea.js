import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTeaClicked(props.id)}>
        <h3>{props.name} - {props.origin} - {props.price}</h3>
        <p><em>{props.roast}</em></p>
        <h2>{props.pounds} pounds</h2>
        <hr />
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  pounds: PropTypes.number,
  id: PropTypes.string, // new PropType
  whenTeaClicked: PropTypes.func // new PropType
};

export default Tea;