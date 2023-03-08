import React, { useState } from "react";
import { useUserAuth } from "../../provider/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { signIn, signUpWithEmailAndPassword, user } = useUserAuth();

  console.log(user);

  async function submitHandler() {
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    if (isLoggingIn) {
      try {
        return await signIn(email, password);
      } catch (err) {
        setError("Incorrect email or password");
      }
      return;
    }
    await signUpWithEmailAndPassword(email, password);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center gap-2 text-xs sm:gap-4 sm:text-sm bg-blue-600 p-6">
      <h1 className="select-none text-2xl font-extrabold uppercase sm:text-4xl">
        {isLoggingIn ? "Login" : "Register"}
      </h1>
      {error && (
        <div className="w-full max-w-[40ch] border border-solid border-rose-400 py-2 text-center text-rose-400">
          {error}
        </div>
      )}
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
        onClick={submitHandler}
        className="relative w-full max-w-[40ch] overflow-hidden border border-solid border-white py-2 uppercase duration-300 after:absolute after:top-0 after:right-full after:z-10 after:h-full after:w-full after:bg-white after:duration-300 hover:text-slate-900 hover:after:translate-x-full"
      >
        <h2 className="relative z-20"> SUBMIT</h2>
      </button>
      <h2
        className="cursor-pointer duration-300 hover:scale-110"
        onClick={() => setIsLoggingIn(!isLoggingIn)}
      >
        {!isLoggingIn ? "Login" : "Register"}
      </h2>
    </div>
    </div>
    
  );
};

export default Login;
