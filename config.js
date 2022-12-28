import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCIbcvP8eRzuZneGmCNN_1kgaDdIM6ly98",
  authDomain: "wirelessbuzzer-796eb.firebaseapp.com",
  databaseURL: "https://wirelessbuzzer-796eb-default-rtdb.firebaseio.com",
  projectId: "wirelessbuzzer-796eb",
  storageBucket: "wirelessbuzzer-796eb.appspot.com",
  messagingSenderId: "437724982032",
  appId: "1:437724982032:web:771bab766e6436716a5395",
  measurementId: "G-7XBD5RHM9K"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();