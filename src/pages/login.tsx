import { type NextPage } from "next";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import React from "react";
import { useUserAuth } from "../../provider/AuthProvider";

const Login: NextPage = () => {
  const { loading, signUpWithEmailAndPassword, signIn, user } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  console.log(user);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    if (loading) {
      try {
        return await signIn(email, password);
      } catch (err) {
        setError("Incorrect email or password");
      }
      return;
    }
    await signUpWithEmailAndPassword(email, password);
  };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-black text-white">
        <div className="flex justify-center gap-6 p-4 lg:container">
          {/* <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Welcome to LieSocial
            </h1> */}
          <LoginForm
            handleSignUp={handleSignUp}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </div>
      </main>
    </>
  );
};

export default Login;
