import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useUserAuth } from "../../provider/AuthProvider";
import CenterColumn from "../components/CenterColumn";
import RightColumn from "../components/RightColumn";
import SideNavBar from "../components/SideNavBar";
import TwitterFeed from "../components/TwitterFeed";
import UserHome from "../components/UserHome";
import Login from "../components/Login";

const Home: NextPage = () => {
  const { user } = useUserAuth();
  console.log(user?.email);

  return (
    <>
      <Head>
        <title>LieSocial</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!user && <Login />}
      {user && <UserHome />}
    </>
  );
};

export default Home;
