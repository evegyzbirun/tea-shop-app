import React from "react";
import tea from "./../img/tea.jpg";

function Header() {
  return (
    <React.Fragment>
      <h1>Tea Shop</h1>
      <img src={tea} alt="An image of tea" />
    </React.Fragment>
  );
}

export default Header;