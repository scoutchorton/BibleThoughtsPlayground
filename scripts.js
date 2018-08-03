//Tools
function eId(i){return document.getElementById(i)};
// Initialize Firebase
console.clear();var config={apiKey:"AIzaSyC0q4W7LycPoJJQ7d6iluAyDxg5iNS3Jx4",authDomain:"github-page-demo.firebaseapp.com",databaseURL:"https://github-page-demo.firebaseio.com",projectId:"github-page-demo",storageBucket:"github-page-demo.appspot.com",messagingSenderId:"608313227028"};firebase.initializeApp(config);
//Variables
var template="<div class=\"post\"><h2>?title?</h2><h4>by ?author?</h4><p>?message?</p></div>";
var t;
//Functions
var db=firebase.database().ref();
//Author data
db.child("/BibleThoughts/admins").on('value',function(s){eId("aData").innerHTML=JSON.stringify(s.val());});
//Insert posts
db.child('/BibleThoughts/posts/').on('value',function(s){
	eId('fbData').innerHTML=JSON.stringify(s.val());
	var d=s.val();
	eId("posts").innerHTML="";
	for(var i=d.length-1;i>=0;i--){
		t=template;
		var data={"a":Object.keys(d[i])[0],"t":Object.keys(d[i][Object.keys(d[i])[0]])[0],"m":d[i][Object.keys(d[i])[0]][Object.keys(d[i][Object.keys(d[i])[0]])[0]]};
		/*Data per post~console.log(d[i]);*/
		/* a~Author ID~console.log(Object.keys(d[i])[0]);*/
		/*t~Post title~console.log(Object.keys(d[i][Object.keys(d[i])[0]])[0]);*/
		/*m~Post message~console.log(d[i][Object.keys(d[i])[0]][Object.keys(d[i][Object.keys(d[i])[0]])[0]]);*/
		//console.log(data);
		var aData=JSON.parse(eId("aData").innerHTML);
		t=t.replace("?message?",data["m"]);
		t=t.replace("?title?",data["t"]);
		if(aData[data["a"]]!==undefined){
			t=t.replace("?author?",aData[data["a"]]);
		}else{
			t=t.replace("?author?","unknown author")
		}
		console.log(t);
		eId("posts").innerHTML+=t;
	}
});
