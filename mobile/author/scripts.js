//Tools
function eId(i){return document.getElementById(i)};
//Web App Links
window.onload=function(){
	var a=document.getElementsByTagName("a");
	for(var i=0;i<a.length;i++){
		if(!a[i].onclick&&a[i].getAttribute("target")!="_blank"){
			a[i].onclick=function(){
				window.location=this.getAttribute("href");
				return false;
			}
		}
	}
	eId('logout').addEventListener('click',function(){
		firebase.auth().signOut();
	});
}
// Initialize Firebase
console.clear();var config={apiKey:"AIzaSyC0q4W7LycPoJJQ7d6iluAyDxg5iNS3Jx4",authDomain:"github-page-demo.firebaseapp.com",databaseURL:"https://github-page-demo.firebaseio.com",projectId:"github-page-demo",storageBucket:"github-page-demo.appspot.com",messagingSenderId:"608313227028"};firebase.initializeApp(config);
var db=firebase.database().ref();
//Functions
function setFrame(addr){eId('wkspFrame').src=addr;document.getElementById('nav').classList.remove('onscreen')}
function greet(){firebase.auth().onAuthStateChanged(function(user){if(user){eId('top').childNodes[2].innerHTML=eId('top').childNodes[2].innerHTML.replace("?user?",user.displayName);}});};
