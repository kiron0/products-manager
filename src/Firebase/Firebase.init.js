import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUrpY2QeLTDrEluSpdfbZvUuaGMKlwS3I",
  authDomain: "independent-service-prov-781fb.firebaseapp.com",
  projectId: "independent-service-prov-781fb",
  storageBucket: "independent-service-prov-781fb.appspot.com",
  messagingSenderId: "445446440578",
  appId: "1:445446440578:web:0f467bce787f94c920969b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;