var cookies = Cookies.get('userid');


/*FIREBASE*/
var config = {
  apiKey: "AIzaSyDUzBVVdyVk-tc_nr_Jabzt0wahOzyCHzY",
  authDomain: "gocityiaac.firebaseapp.com",
  databaseURL: "https://gocityiaac.firebaseio.com",
  projectId: "gocityiaac",
  storageBucket: "gocityiaac.appspot.com",
  messagingSenderId: "263063888516"
};
firebase.initializeApp(config);




var rootRef = firebase.database().ref().child("messages/" +cookies);
// var rootRef = firebase.storage().ref().child("campaigns/");

// console.log(userid);



rootRef.on("child_added", snap => {

  var title = snap.child("title").val();
  var userid = snap.child("userid").val();
  var shortdesc = snap.child("shortdesc").val();
  var longdesc = snap.child("longdesc").val();
  var points = snap.child("points").val();



window.storageRef = firebase.storage().ref().child("campaigns/"+ cookies);

  storageRef.getDownloadURL().then(function(url){
      var img = url;

 $('.row').append('<div class="col-sm-6"><div class="card"><div class="card-header" style="background:#f8f9fa"><i class="material-icons">'+ 'grade'.repeat(points) +'</i></div><img class="card-img-top" src='+ url +'alt="ciclogreen"><div class="card-body"><h5 class="card-title">'+ title +'</h5><p2 class="card-text">' + shortdesc +'</p2></div></div></div>');

 $('.longtext').append('<p2>'+ longdesc +'</p2>')

 $('.titulo').append('<span>'+ title +'</span>')

  });
});
