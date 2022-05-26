import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h2>This is side menuu</h2>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
