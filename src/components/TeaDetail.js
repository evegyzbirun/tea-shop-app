import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props) {
  const { tea } = props;

  return (
    <React.Fragment>
      <h1>Tea Detail</h1>
      <h3>{tea.name} - {tea.origin} - {tea.price}</h3>
      <p><em>{tea.roast}</em></p>
      <hr />
    </React.Fragment>
  )
}

TeaDetail.propTypes = {
  tea: PropTypes.object
  // onClickingDelete: PropTypes.func, // new code
  // onClickingEdit: PropTypes.func // new code
};

export default TeaDetail;