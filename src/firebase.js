import { initializeApp } from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB6zbJCuF-Abh-b1hZo4QVCxs3wfJUn12w",
    authDomain: "pancefood.firebaseapp.com",
    projectId: "pancefood",
    storageBucket: "pancefood.appspot.com",
    messagingSenderId: "541088022207",
    appId: "1:541088022207:web:2092c57a38752f3829d00a",
    measurementId: "G-MYLF99PJDC"
  };

  const app = initializeApp(firebaseConfig);
  const auth = app.auth();

  export {auth}