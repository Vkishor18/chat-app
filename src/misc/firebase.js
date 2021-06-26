import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBjbbCgVk2XhcQVtoEXRs69Ev6RazcDwDE',
  authDomain: 'chat-web-app-c4c5f.firebaseapp.com',
  databaseURL: 'https://chat-web-app-c4c5f-default-rtdb.firebaseio.com/',
  projectId: 'chat-web-app-c4c5f',
  storageBucket: 'chat-web-app-c4c5f.appspot.com',
  messagingSenderId: '919716926060',
  appId: '1:919716926060:web:eabe12e1340c81cec93e49',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
