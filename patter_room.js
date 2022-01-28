
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAEer8OViDqRD2M_ocCff9afjRbtA1Y014",
      authDomain: "patter-30b0c.firebaseapp.com",
      databaseURL: "https://patter-30b0c-default-rtdb.firebaseio.com",
      projectId: "patter-30b0c",
      storageBucket: "patter-30b0c.appspot.com",
      messagingSenderId: "39393474967",
      appId: "1:39393474967:web:250f697e822fb8bee46cd2"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
