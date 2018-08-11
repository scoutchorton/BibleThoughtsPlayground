//Tools
function eId(i){return document.getElementById(i)};
// Initialize Firebase
console.clear();var config={apiKey:"AIzaSyC0q4W7LycPoJJQ7d6iluAyDxg5iNS3Jx4",authDomain:"github-page-demo.firebaseapp.com",databaseURL:"https://github-page-demo.firebaseio.com",projectId:"github-page-demo",storageBucket:"github-page-demo.appspot.com",messagingSenderId:"608313227028"};firebase.initializeApp(config);
var db=firebase.database().ref();
//Functions
function toggleActive(id){if(eId(id).classList.contains('activeSetting')){eId(id).classList.remove('activeSetting');}else{eId(id).classList.add('activeSetting');eId(id)}}
function setFrame(addr){eId('wkspFrame').src=addr;}
function greet(){firebase.auth().onAuthStateChanged(function(user){if(user){eId('greeting').innerHTML=eId('greeting').innerHTML.replace("?user?",user.displayName);}});};
function c(){firebase.auth().signOut();}
//function updateDisplayName(n){console.log("Updating display name for: "+firebase.auth().currentUser);firebase.auth().currentUser.updateProfile({displayName:n}).then(function(){alert("Display name updated!");}).catch(function(e){alert(e);})}
/*db.child('/BibleThoughts/posts/').on('value',function(s){
	var p=[];var d=s.val();for(var i=0;i<Object.keys(d).length;i++){if(firebase.auth().currentUser.uid==Object.keys(d[i])[0]){p.push(d[i]);}eId('fbData').innerHTML=JSON.stringify(p);}
	eId('postsContainer').innerHTML='';
	for(var i=0;i<Object.keys(p).length;i++){
		console.log(Object.keys(p[i][Object.keys(p[i])[0]])[0]);
		var l=document.createElement('li');
		l.innerHTML="<i class=\"material-icons\">chevron_right</i>"+Object.keys(p[i][Object.keys(p[i])[0]])[0];
		eId('postsContainer').appendChild(l);
	}
});*/
