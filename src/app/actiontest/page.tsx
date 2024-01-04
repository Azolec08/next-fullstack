import { sayHello } from "@/library/action";
import React from "react";

const ActionTest = () => {
  return (
    <div>
      <form action={sayHello}>
        <button>Test me</button>
      </form>
    </div>
  );
};

export default ActionTest;
