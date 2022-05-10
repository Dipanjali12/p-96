const firebaseConfig = {
      apiKey: "AIzaSyCVi22VpakNzR9NXg9j1j2saEUxAhHsdNM",
      authDomain: "kwitter-1b852.firebaseapp.com",
      databaseURL: "https://kwitter-1b852-default-rtdb.firebaseio.com",
      projectId: "kwitter-1b852",
      storageBucket: "kwitter-1b852.appspot.com",
      messagingSenderId: "774878119493",
      appId: "1:774878119493:web:2f6179c4ee60620ad2452c",
      measurementId: "G-0BP5KWC95Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
userName = localStorage.getItem("userName");
document.getElementById("userName").innerHTML = "Welcome " + userName + "!";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'> " + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      roomName = document.getElementById("roomName").value;
      firebase.database().ref("/").child(roomName).update({
            purpose: "adding room"
      });
      localStorage.setItem("roomName", roomName);
      window.location = "chat-app_page.html";
}
function redirect(name) {
      localStorage.setItem("roomName", name);
      window.location = "chat-app_page.html";
}

function logout (){
localStorage.removeItem("roomName");
localStorage.removeItem("userName");
window.location="indexi-.html";

}