import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if(loading || gLoading){
      return <p>Loading...</p>
  }

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  const handleForm = event =>{
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;

      signInWithEmailAndPassword(email,password);

      console.log(email,password);
      event.target.reset();
  }

  return (
    <div className="flex flex-col items-center mt-16 border-2 w-1/3 mx-auto p-12">
      <form onSubmit={handleForm}>
        <h2 className="mb-4 text-3xl">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="enter email"
          class="input input-bordered w-full max-w-xs mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          class="input input-bordered w-full max-w-xs mb-4"
        />
        <input
          type="submit"
          value="Login"
          placeholder="enter password"
          class="input input-bordered btn btn-primary w-full max-w-xs"
        />
        <p><small>Create new account? <Link to='/signup' className="text-blue-600">Register</Link></small></p>
        <div class="divider">OR</div>
      </form>

      <div className="w-75 mx-auto">
        <button
          onClick={() => signInWithGoogle()}
          className="btn text-center w-100 rounded-3 justify-content-center align-items-center mx-auto d-flex btn-dark fw-bold"
        >
          <img src="https://i.ibb.co/WGjM94V/google.png" alt="" />
          <span className="ms-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
