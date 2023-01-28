import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props) {
  const { tea, onClickingSell } = props;

  return (
    <React.Fragment>
      <h1>Tea Detail</h1>
      <h3>{tea.name} - {tea.origin}</h3>
      <p><h2>{tea.price}</h2>$</p>
      <p>roast for<em>{tea.roast}</em> days</p>
      <h2>{tea.pounds}</h2>
      <button onClick={onClickingSell}>Sell</button>
      <hr />
    </React.Fragment>
  )
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingSell: PropTypes.func 
  // onClickingEdit: PropTypes.func // new code
};

export default TeaDetail;