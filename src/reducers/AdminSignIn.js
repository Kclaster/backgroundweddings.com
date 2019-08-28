import { ADMIN_SIGNED_IN, ADMIN_SIGNED_OUT } from '../actions/types';

const INITIAL_STATE = {
    adminIsSignedIn: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADMIN_SIGNED_IN:
        return {...state, adminIsSignedIn: true};
        case ADMIN_SIGNED_OUT:
            return {...state, adminIsSignedIn: false};
        default: 
            return state;
    }
};