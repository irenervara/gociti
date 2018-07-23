// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyDUzBVVdyVk-tc_nr_Jabzt0wahOzyCHzY",
  authDomain: "gocityiaac.firebaseapp.com",
  databaseURL: "https://gocityiaac.firebaseio.com",
  projectId: "gocityiaac",
  storageBucket: "gocityiaac.appspot.com",
  messagingSenderId: "263063888516"
};
firebase.initializeApp(config);

// Reference messages collection
$('#fileInput').on('change', function(e){
    var file = e.target.files[0];
    var userid = Date.now();
    var email = $('#email').val();
    var title = $('#title').val();
    var shortdesc = $('#shortdesc').val();
    var longdesc = $('#longdesc').val();
    var points = $('#points').val();
    var timespan = $('#timespan').val();

    var storageRef = firebase.storage().ref('campaigns/'+ userid);
    var messagesRef = firebase.database().ref('messages/'+ userid);

    ////    UPLOAD FILE
    var task = storageRef.put(file);

    $('#submit').click(function(){
        task.on('state_changed',

            function progress(snapshot){
                var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;

                $('.pgr').width(percentage+'%');
                $('.pgr').text(percentage+'%');
            },

            function error(err){
                console.log(err);

            },

            function complete(){
    //        UPDATING DATABASE
                messagesRef.set({
                    userid: userid,
                    email: email,
                    title: title,
                    shortdesc: shortdesc,
                    longdesc: longdesc,
                    points: points,
                    timespan: timespan
                })
            }
       )
    })
});
