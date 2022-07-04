import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./credentials.js";

const getDb = () => {
  if (getApps.length === 0) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }
  return getFirestore();
};

const getAttendees = async () => {
  const db = getDb();
  // get the collection
  const attendeeCollection = db.collection("attendees");
  // get all the docs of the collection
  try {
    const snapshot = await attendeeCollection.get();
    const attendees = [];
    snapshot.docs.forEach((doc) => {
      attendees.push({ id: doc.id, ...doc.data() }); // ...doc will gather not just the id, but also the data
    });

    return attendees;
  } catch (error) {
    console.error(eror);
  }
};
