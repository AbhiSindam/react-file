import './App.css';

function App() {


  const firebaseConfig = {
    apiKey: "AIzaSyDf8xki5ApZvUBDk-AzzzYgf-b8tXtsP4U",
    authDomain: "XXXXXX",
    projectId: "frazzo-eeb6c",
    storageBucket: "XXXXXX",
    messagingSenderId: "768646089082",
    appId: "1:768646089082:web:30b9e52b40ad885a586ec3",
    measurementId: "XXXXXX",
  };
  console.log("abhi")

  firebase.initializeApp(firebaseConfig);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
