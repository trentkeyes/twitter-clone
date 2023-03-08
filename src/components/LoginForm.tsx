import { useState, useContext } from "react";
import { useUserAuth } from "../../provider/AuthProvider";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSignUp,
}) => {
  const { user } = useUserAuth();
  
  return (
    <div className="lg:border-1 flex flex-col justify-center border lg:border">
      <h2 className="p-2 text-center text-2xl">LOGIN</h2>
      <input
        type="text"
        className="w-full max-w-[40ch] border-2 border-solid border-white bg-white p-2 text-black outline-none duration-300 focus:border-blue-600"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full max-w-[40ch] border-2 border-solid border-white bg-white p-2 text-black outline-none duration-300 focus:border-blue-600"
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
