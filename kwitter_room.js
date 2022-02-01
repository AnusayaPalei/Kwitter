
const firebaseConfig = {
      apiKey: "AIzaSyC7Fw5gUZNP_ivu9iH3Gp8DZSzpc3NnTKg",
      authDomain: "kwitter-hw-151a9.firebaseapp.com",
      databaseURL: "https://kwitter-hw-151a9-default-rtdb.firebaseio.com",
      projectId: "kwitter-hw-151a9",
      storageBucket: "kwitter-hw-151a9.appspot.com",
      messagingSenderId: "571351728980",
      appId: "1:571351728980:web:0de9febb0a07a08f59fec1",
      measurementId: "G-2MBWPCBG8H"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem('user_name');
     document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row= "<div class='room_name' id="+Room_names+" onclick='redirect_toroom_name(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirect_toroom_name(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}