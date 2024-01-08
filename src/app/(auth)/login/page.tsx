// import { auth } from "@/library/auth";
import React from "react";

import LoginForm from "@/components/login/LoginForm";
const Login = async () => {
  // const session = await auth();

  // console.log(session);

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
