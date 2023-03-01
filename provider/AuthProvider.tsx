import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

interface UserAuthContextValue {
  user: User | null;
  loading: boolean;
  signUpWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}

const UserAuthContext = createContext<UserAuthContextValue>({
  user: null,
  loading: true,
  signUpWithEmailAndPassword: async () => {},
  signIn: async () => {},
  logOut: async () => {},
});

export const useUserAuth = () => useContext(UserAuthContext);

const UserAuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const handleUserAuthStateChange = (user: User | null) => {
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleUserAuthStateChange);
    return unsubscribe;
  }, []);

  const signUpWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<void> => {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCred.user;

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        email: email,
        password: password,
      }),
        {
          merge: true,
        };
    } catch (error) {
      console.error("Error adding tweet to Firestore: ", error);
      throw error;
    }
  };

  const signIn = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  const value: UserAuthContextValue = {
    user,
    loading,
    signUpWithEmailAndPassword,
    signIn,
    logOut,
  };

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
