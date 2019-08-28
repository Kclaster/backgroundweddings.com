import { FETCH_NEW_CONTACT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_NEW_CONTACT:
      return action.payload;
    default:
      return state;
  }
};

//this does nothing, i will never need to post the contact form back to the client, but I will use something identical for blogs