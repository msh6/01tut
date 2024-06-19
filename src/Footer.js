// import React from "react";

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      <p>
        {length} List {length === 1 ? "Item" : "Items"}
      </p>
      <p>Thank You! Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
