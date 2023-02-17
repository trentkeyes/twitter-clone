import { useState, useContext } from "react";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import { FirebaseSignInProvider } from "@firebase/util";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSignUp,
}) => {
  return (
    <div className="lg:border-1 border-gray-600 lg:border">
      <input
        type="text"
        className="w-full max-w-[40ch] border-b-2 border-solid border-white p-2 text-slate-900 outline-none duration-300 focus:border-cyan-300"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full max-w-[40ch] border-b-2 border-solid border-white p-2 text-slate-900 outline-none duration-300 focus:border-cyan-300"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSignUp}
        className="relative w-full max-w-[40ch] overflow-hidden border border-solid border-white py-2 uppercase duration-300 after:absolute after:top-0 after:right-full after:z-10 after:h-full after:w-full after:bg-white after:duration-300 hover:text-slate-900 hover:after:translate-x-full"
      >
        <h2 className="relative z-20"> SUBMIT</h2>
      </button>
    </div>
  );
};

export default LoginForm;
