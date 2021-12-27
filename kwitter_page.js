var  firebaseConfig = {
      apiKey: "AIzaSyAC2BKbDOO3kcmNyfofIsni_5_sjCaHlWw",
      authDomain: "lets-chat-app-a91e0.firebaseapp.com",
      databaseURL: "https://lets-chat-app-a91e0-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-a91e0",
      storageBucket: "lets-chat-app-a91e0.appspot.com",
      messagingSenderId: "1012285491391",
      appId: "1:1012285491391:web:41f05f113f9569457f1e0a"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}