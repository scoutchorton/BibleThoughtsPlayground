//Tools
function eId(i){return document.getElementById(i)}

// Initialize Firebase
console.clear();
var config = {
  apiKey:"AIzaSyC0q4W7LycPoJJQ7d6iluAyDxg5iNS3Jx4",
  authDomain:"github-page-demo.firebaseapp.com",
  databaseURL:"https://github-page-demo.firebaseio.com",
  projectId:"github-page-demo",
  storageBucket:"github-page-demo.appspot.com",
  messagingSenderId:"608313227028"
};
firebase.initializeApp(config);

//Firebase management
var dbRef=firebase.database().ref();
dbRef.child('/BibleThoughts/admins/').on('value', function(s){
  eId('btAdmins').innerHTML=JSON.stringify(s.val());
});
dbRef.child('/BibleThoughts/posts/').on('value', function(s){
  eId('btData').innerHTML = JSON.stringify(s.val());
  var data=s.val();
  var HTML = "";
  var admins=JSON.parse(eId('btAdmins').innerHTML);
  for(var i in data){
    i=data.length-1-i;
    HTML += "<div class=\"post " + Object.keys(data[i])[0] + "\"><h3>" + Object.keys(data[i][Object.keys(data[i])])[0] + "</h3><span> by " + admins[Object.keys(data[i])[0]] + "</span><p>" + data[i][Object.keys(data[i])][Object.keys(data[i][Object.keys(data[i])])] + "</p></div>";
  }
  eId('posts').innerHTML = HTML;
});
function signUp() {
  firebase.auth().createUserWithEmailAndPassword(eId('email').value, eId('password')).then(function(){
    sbToggle(0);
  }).catch(function(e){alert(e.code + ", " + e.message);});
}

//Toggles
function sbToggle(m) {
  //sbToggle - Sign in Box TOGGLE
  if(m) {
    eId('signin-popup').style.display = "block";
	document.body.style.overflow = "hidden";
  } else {
    eId('signin-popup').style.display = "none";
	document.body.style.overflow = "visible";
  }
}
function siToggle(m) {
  //siToggle - Sign in TOGGLE (toggles between 'Sign in' and 'Sign up')
  //1 = sign up
  //0 = sign in
  if(m) {
    eId('signin-toggle').style.display = "block";
    eId('signup-toggle').style.display = "none";
    eId('username').style.display = "inline-block";
    eId('signup-button').style.display = "block";
    eId('signin-button').style.display = "none";
  } else {
    eId('signup-toggle').style.display = "block";
    eId('signin-toggle').style.display = "none";
    eId('username').style.display = "none";
    eId('signin-button').style.display = "block";
    eId('signup-button').style.display = "none";
  }
}
