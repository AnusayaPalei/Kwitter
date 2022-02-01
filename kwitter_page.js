//YOUR FIREBASE LINKS
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

     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");

     function send(){
           msg=document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
                 name:user_name,
                 message:msg,
                 like:0
           });
           document.getElementById("msg").value="";
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name + "<img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>";
like_button = "<button class='btn-warning' id= "+ firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_with_tag = "<span class= 'glyphicon glyphicon-thumbs-up'>like: "+like+"</span> </button> <hr>";

row =name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();
function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function update_like(message_id){
      button_id= message_id;
      like = document.getElementById(button_id).value;
      updated_likes = Number(like)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      })
}