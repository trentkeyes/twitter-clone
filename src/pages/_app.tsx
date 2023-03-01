import { type AppType } from "next/app";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import "../styles/globals.css";
import { AuthProvider } from "../../provider/AuthProvider";
import UserAuthProvider from "../../provider/AuthProvider";

const MyApp: AppType<any> = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <UserAuthProvider>
      <Component {...pageProps} />
    </UserAuthProvider>
  );
};

export default MyApp;