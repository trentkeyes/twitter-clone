import React, { useState, useEffect, useMemo } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useUserAuth } from "../provider/AuthProvider";
import { db } from "../firebase";

export default function useFetchTweets() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tweets, setTweets] = useState(null);

  const { user } = useUserAuth();

  useEffect(() => {
    async function fetchData() {
      if (!user) return;
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("found user data", docSnap.data().tweets);
          if (!docSnap.data().tweets) {
            setTweets({});
            return;
          }
          setTweets(docSnap.data().tweets);
        } else {
          setTweets({});
          console.log("No such document!");
        }
      } catch (err) {
        setError("Failed to load tweets");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { loading, error, tweets, setTweets };
}
