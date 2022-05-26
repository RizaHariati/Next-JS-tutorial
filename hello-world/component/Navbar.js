import React from "react";

const Navbar = ({ children }) => {
  return (
    <div>
      <h1>This is navbar</h1>
      {children}
    </div>
  );
};

export default Navbar;
