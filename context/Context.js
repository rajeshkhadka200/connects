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

  //  fetch the service_person
  const [servicePerson, setservicePerson] = useState([]);
  useEffect(() => {
    const getServicePerson = async () => {
      try {
        onSnapshot(collection(db, "service_person"), (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            oprn_id: doc.id,
          }));
          setservicePerson(data);
        });
      } catch (error) {
        alert("err while geting data", error);
      }
    };
    getServicePerson();
  }, []);
  //  fetch the events
  const [event, setEvent] = useState([]);
  useEffect(() => {
    const getEvent = async () => {
      try {
        onSnapshot(collection(db, "events"), (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            oprn_id: doc.id,
          }));
          setEvent(data);
        });
      } catch (error) {
        alert("err while geting data", error);
      }
    };
    getEvent();
  }, []);
  console.log("event", event);
  return (
    <ContexStore.Provider
      value={{
        user,
        setUser,
        servicePerson,
        setservicePerson,
        event,
        setEvent,
      }}
    >
      {children}
    </ContexStore.Provider>
  );
};
export default Context;
