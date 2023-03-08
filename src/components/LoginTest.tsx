// import { type NextPage } from "next";
import { useState } from "react";
import LoginForm from "./LoginForm";
import React from "react";
import { useUserAuth } from "../../provider/AuthProvider";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { log } from "console";

const Login = () => {
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
    if (user) {
      const userRef = doc(db, "users", user.uid);
      console.log("user id", user.uid);

      await setDoc(userRef, {
        email: email,
        password: password,
      });
    }
  };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <LoginForm
          handleSignUp={handleSignUp}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </main>
    </>
  );
};

export default Login;
