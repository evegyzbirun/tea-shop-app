import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props) {
  const { tea, onClickingSell, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Tea Detail</h1>
      <h3>{tea.name} - {tea.origin}</h3>
      <p>{tea.price}$</p>
      <p>roast for<em>{tea.roast}</em> days</p>
      <h2>{tea.pounds} pounds</h2>
      <button onClick={onClickingEdit}>Update Tea</button>
      <button onClick={() => onClickingSell(tea.pounds)}>Sell</button>
      <hr />
    </React.Fragment>
  )
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingSell: PropTypes.func,
  onClickingEdit: PropTypes.func // new code
};

export default TeaDetail;