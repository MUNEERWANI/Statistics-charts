import React, { Fragment } from "react";
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <Fragment>
      <div className="header-container">
        <h1>Data Visualization</h1>
        <h2>Showing Mean, Mode, and Median</h2>
      </div>
    </Fragment>
  );
};

export default Header;
