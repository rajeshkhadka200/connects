import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useState, useEffect, createContext } from "react";
import { db } from "../config/firebase.js";
export const ContexStore = createContext();
const Context = ({ children }) => {
  // user context
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem("auth_token");
        const q = query(
          collection(db, "users"),
          where("auth_token", "==", token)
        );
        onSnapshot(q, (snapshot) => {
          snapshot.docs.forEach((doc) => {
            setUser([{ ...doc.data(), oprn_id: doc.id }]);
          });
        });
      } catch (error) {
        console.log("err while geting data", error);
      }
    };
    fetchUser();
  }, []);
  console.log(user);
  return (
    <ContexStore.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </ContexStore.Provider>
  );
};
export default Context;
