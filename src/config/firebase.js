import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();

//specific reference to conact location of database?
export const Contact = databaseRef.child("Potential Clients");

export const Admin = databaseRef.child("admin");