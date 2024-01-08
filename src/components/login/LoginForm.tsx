"use client";

import { login } from "@/library/action";
import { useFormState } from "react-dom";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  // const router = useRouter();

  // useEffect(() => {
  //   state;
  // }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form action={formAction} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="userName"
                  placeholder="Username"
                  name="userName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">Forgot password?</label>
              </div>
              <div className="form-control ">
                <button className="btn btn-primary">Login</button>
              </div>
              {state?.error}
              <Link href="/register">
                Dont have an account? <b>Register</b>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
