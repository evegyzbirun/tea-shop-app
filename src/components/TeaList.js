import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";


function TeaList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.teaList.map((tea) =>
        <Tea
          whenTeaClicked={props.onTeaSelection}
          name={tea.name}
          origin={tea.origin}
          price={tea.price}
          roast={tea.roast}
          pounds={tea.pounds}
          id={tea.id}
        />
      )}
    </React.Fragment>
  );
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func
};

export default TeaList;