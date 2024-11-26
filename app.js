// Firebase Configuration

    const firebaseConfig = {

        apiKey: "AIzaSyAMsLao2yNdSTuMq90VODaBpPcYI008s1g",
      
        authDomain: "keelyo-11eb5.firebaseapp.com",
      
        databaseURL: "https://keelyo-11eb5-default-rtdb.firebaseio.com",
      
        projectId: "keelyo-11eb5",
      
        storageBucket: "keelyo-11eb5.firebasestorage.app",
      
        messagingSenderId: "860571981563",
      
        appId: "1:860571981563:web:16eee101358112fff0425e",
      
        measurementId: "G-4G0T2LBM4N"
      
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  // Reference the motion status in Firebase
  const motionRef = database.ref('motion');
  
  // Listen for changes in motion status
  motionRef.on('value', (snapshot) => {
    const motionStatus = snapshot.val();
    const statusElement = document.getElementById('motion-status');
    if (motionStatus === "Motion Detected") {
      statusElement.textContent = "Motion Detected 🚶‍♂️";
      statusElement.style.color = "red";
    } else {
      statusElement.textContent = "No Motion 🛌";
      statusElement.style.color = "green";
    }
  });
  