import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC88CUZNfRHpF_-6BtjOGhFPE9d9CU7EoQ",
  authDomain: "chat-box-96023.firebaseapp.com",
  projectId: "chat-box-96023",
  storageBucket: "chat-box-96023.appspot.com",
  messagingSenderId: "344405519379",
  appId: "1:344405519379:web:867d8542d50e038cc563e6",
  measurementId: "G-G7BB48BNFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
    </div>
  )
}

export default App
