var a=true;
function eId(i){return document.getElementById(i);}
function fade(id){eId(id).classList.add('fdIn');setTimeout(function(){eId(id).classList.remove('fdIn');},5000);}
firebase.initializeApp({apiKey:"AIzaSyC0q4W7LycPoJJQ7d6iluAyDxg5iNS3Jx4",authDomain:"github-page-demo.firebaseapp.com",databaseURL:"https://github-page-demo.firebaseio.com",projectId:"github-page-demo",storageBucket:"github-page-demo.appspot.com",messagingSenderId:"608313227028"});
var db=firebase.database().ref();
db.child("/BibleThoughts/admins").on('value',function(s){eId("aData").innerHTML=JSON.stringify(s.val());});
function signIn(){
	eId('loading').style.display='block';
	firebase.auth().signInWithEmailAndPassword(eId('email').value,eId('password').value)
	.then(
		function(){
			var aData=JSON.parse(eId('aData').innerHTML);
			if(Object.keys(aData).indexOf(firebase.auth().currentUser.uid)>=0){
				window.location.href="./author.html";
			}else{
				eId('spacer').innerHTML="Not an author account. Please email scoutchorton@gmail.com if you believe this is false.";
				fade('spacer');
				a=false;
				firebase.auth().signOut();
				eId('loading').style.display='none';
			}
		}
	)
	.catch(function(e) {var er={"auth/wrong-password":"Incorrect password for this user.","auth/user-not-found":"No user found for this email.","auth/user-disabled":"Account deactivated/disabled. Email scoutchorton@gmail.com to resolve this issue.","auth/invalid-email":"Email not a valid email address."};eId('spacer').innerHTML=er[e.code];fade('spacer');eId('loading').style.display='none';});}
window.onload=function(){eId('loading').style.display='block';firebase.auth().onAuthStateChanged(function(user){if(user&&a){window.location.href="./author.html";}else{eId('loading').style.display='none';}});eId('password').addEventListener("keyup",function(e){e.preventDefault();if(e.keyCode==13){eId('loginButton').click();}});}
