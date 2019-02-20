// const config = {
//   apiKey: "AIzaSyDjS6tGpqjAaC0aXQAGZMkjssABbZzTgSo",
//   authDomain: "awesome-bb71b.firebaseapp.com",
//   databaseURL: "https://awesome-bb71b.firebaseio.com",
//   projectId: "awesome-bb71b",
//   storageBucket: "awesome-bb71b.appspot.com",
//   messagingSenderId: "646496200074"
// };

const config = {
  apiKey: "AIzaSyDrgbBpmVrw3qsptpH8dTgf8zQoLFIVO_I",
  authDomain: "polling-app-gatsby.firebaseapp.com",
  databaseURL: "https://polling-app-gatsby.firebaseio.com",
  projectId: "polling-app-gatsby",
  storageBucket: "polling-app-gatsby.appspot.com",
  messagingSenderId: "417960454345"
};

let firebaseCache;

export const getUiConfig = firebase => ({
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
});

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};

export default getFirebase;
