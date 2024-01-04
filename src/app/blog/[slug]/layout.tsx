import React from "react";

type childrenType = {
  children: React.ReactNode;
};

const layout = ({ children }: childrenType) => {
  return (
    <div>
      <h1>My Slug NavBar</h1>
      {children}
    </div>
  );
};

export default layout;
