import { Contact, Admin } from "../config/firebase";
import { FETCH_NEW_CONTACT, FETCH_ADMIN, ADMIN_SIGNED_IN, SET_HEIGHT } from "./types";

export const addContact = newContact => async dispatch => {
  Contact.push().set(newContact);
};


export const fetchNewContact = () => async dispatch => {
  Contact.on("value", snapshot => {
    dispatch({
      type: FETCH_NEW_CONTACT,
      payload: snapshot.val()
    });
  });
};

export const fetchAdmin = () =>
async dispatch => {
    Admin.once('value', snapshot => {
        dispatch({
            type: FETCH_ADMIN,
            payload: snapshot.val()
        });
    });
};


//will this make it true for all users or just the current use? if admin signs in like this and someone else is on the sight, will they see admin specific items
export const adminSignedIn = () => {
    return {
        type: ADMIN_SIGNED_IN,
        payload: true
    };
};

export const setHeight = (action) => {
    return {
        type: SET_HEIGHT,
        payload: action
    }
}
