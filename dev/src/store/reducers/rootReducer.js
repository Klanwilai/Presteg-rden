import authReducer from './authReducer';
import eventReducer from './eventReducer';
import contactReducer from './contactReducer';
import imageReducer from './imageReducer';
import timelineReducer from "./timelineReducer";

import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    contact: contactReducer,
    auth: authReducer,
    event: eventReducer,
    image: imageReducer,
    timeline: timelineReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;