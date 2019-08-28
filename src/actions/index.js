import { ADMIN_SIGNED_IN, SET_HEIGHT } from "./types";

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
