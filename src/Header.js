import React from "react";

// this is a Functional Component
const Header = ({ title }) => {
  // Inline CSS Styling
  /* const headerStyle = {
    backgroundColor: "royalblue",
    color: "#fff",
  };
 */
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
