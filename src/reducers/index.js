import { combineReducers } from 'redux';
import contact from './Contact';
import admin from './Admin';
import adminIsSignedIn from './AdminSignIn';
import setHeight from './SetHeight';


export default combineReducers({
    contact,
    admin,
    adminAccess: adminIsSignedIn,
    setHeight
})