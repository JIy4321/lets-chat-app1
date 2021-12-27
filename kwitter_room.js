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
//ADD YOUR FIREBASE LINKS HERE


    function getData() {
           firebase.database().ref("/").on('value', function(snapshot) {
                  document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {
                         childKey = childSnapshot.key; Room_names = childKey;
      //Start code
        console.log("Room Name -" + Room_Names);
        row = "<div class='room_name' id="+Room_names+" onclick ='redirectToRommName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+= row;    
        //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function redirectToRommName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location  = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}
