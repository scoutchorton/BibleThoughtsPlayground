//Tools
function eId(i){return document.getElementById(i)};
// Initialize Firebase
console.clear();var config={apiKey:"AIzaSyC0q4W7LycPoJJQ7d6iluAyDxg5iNS3Jx4",authDomain:"github-page-demo.firebaseapp.com",databaseURL:"https://github-page-demo.firebaseio.com",projectId:"github-page-demo",storageBucket:"github-page-demo.appspot.com",messagingSenderId:"608313227028"};firebase.initializeApp(config);
//Functions
function toggleActive(id){if(eId(id).classList.contains('activeSetting')){eId(id).classList.remove('activeSetting');}else{eId(id).classList.add('activeSetting');eId(id)}}
window.onload = function(){firebase.auth().onAuthStateChanged(function(user){if(user){eId('greeting').innerHTML=eId('greeting').innerHTML.replace("?user?",firebase.auth().currentUser.displayName);}else{eId('greeting').innerHTML="Redirecting to login page...";window.location.href="./login.html";}});};
function c(){firebase.auth().signOut();}
