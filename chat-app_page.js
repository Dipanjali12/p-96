//YOUR FIREBASE LINKS
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

firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("userName");
roomname=localStorage.getItem("roomName");


function getData() {
      firebase.database().ref("/" + roomname).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("roomName");
      localStorage.removeItem("userName");
      window.location = "indexi-.html";

}

function send() {
 msg=document.getElementById("msg").value;
 firebase.database().ref(roomname).push({
       name:username,
       message:msg,
       like:0
 });
 document.getElementById("msg").value="";


}