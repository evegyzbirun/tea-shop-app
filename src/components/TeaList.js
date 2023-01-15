import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";


function TeaList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.teaList.map((tea) =>
        <Tea
          whenTicketClicked={props.onTicketSelection}
          name={tea.name}
          origin={tea.origin}
          price={tea.price}
          roast={tea.roast}
          id={tea.id}
        />
      )}
    </React.Fragment>
  );
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TeaList;