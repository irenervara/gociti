var config = {
  apiKey: "AIzaSyDUzBVVdyVk-tc_nr_Jabzt0wahOzyCHzY",
  authDomain: "gocityiaac.firebaseapp.com",
  databaseURL: "https://gocityiaac.firebaseio.com",
  projectId: "gocityiaac",
  storageBucket: "gocityiaac.appspot.com",
  messagingSenderId: "263063888516"
};
firebase.initializeApp(config);


var devObj = new Object();
var devRef = firebase.database().ref('bcn-device-super');


$.ajax({
        url: 'https://api.smartcitizen.me/v0/devices/14042/readings?sensor_id=12&rollup=4h&from=2022-02-15&to=2022-03-03',
        method: 'GET',
        async: true,
        success: function(data){
            console.log(data);
            devObj.device_id = data.device_id;
            devObj.sensor_key = data.sensor_key;
            devObj.from = data.from;
						devObj.to = data.to;
            devObj.sensorTemp = data.readings;
        },
        error: function(err){
            console.log(err,'data not found')
        },
        complete: function(){
            devRef.child('bcn-device-temp').set({
                device_id: devObj.device_id,
                sensor_key: devObj.sensor_key,
                from: devObj.from,
								to: devObj.to,
								temp: devObj.sensorTemp
            });
        }
});


$.ajax({
        url: 'https://api.smartcitizen.me/v0/devices/4293/readings?sensor_id=29&rollup=4h&from=2018-05-22&to=2018-06-20',
        method: 'GET',
        async: true,
        success: function(data){
            console.log(data);
            devObj.device_id = data.device_id;
            devObj.sensor_key = data.sensor_key;
            devObj.from = data.from;
						devObj.to = data.to;
            devObj.sensorNoise = data.readings;

        },
        error: function(err){
            console.log(err,'data not found')
        },
        complete: function(){
            devRef.child('bcn-device-noise').set({
                device_id: devObj.device_id,
                sensor_key: devObj.sensor_key,
                from: devObj.from,
								to: devObj.to,
								noise: devObj.sensorNoise
            });
        }
});

$.ajax({
        url: 'https://api.smartcitizen.me/v0/devices/4293/readings?sensor_id=13&rollup=4h&from=2018-05-22&to=2018-06-20',
        method: 'GET',
        async: true,
        success: function(data){
            console.log(data);
            devObj.device_id = data.device_id;
            devObj.sensor_key = data.sensor_key;
            devObj.from = data.from;
						devObj.to = data.to;
            devObj.sensorHum = data.readings;

        },
        error: function(err){
            console.log(err,'data not found')
        },
        complete: function(){
            devRef.child('bcn-device-hum').set({
                device_id: devObj.device_id,
                sensor_key: devObj.sensor_key,
                from: devObj.from,
								to: devObj.to,
								hum: devObj.sensorHum
            });
        }
});

$.ajax({
        url: 'https://api.smartcitizen.me/v0/devices/4293/readings?sensor_id=14&rollup=4h&from=2018-05-22&to=2018-06-20',
        method: 'GET',
        async: true,
        success: function(data){
            console.log(data);
            devObj.device_id = data.device_id;
            devObj.sensor_key = data.sensor_key;
            devObj.from = data.from;
						devObj.to = data.to;
            devObj.sensorLight = data.readings;

        },
        error: function(err){
            console.log(err,'data not found')
        },
        complete: function(){
            devRef.child('bcn-device-light').set({
                device_id: devObj.device_id,
                sensor_key: devObj.sensor_key,
                from: devObj.from,
								to: devObj.to,
								light: devObj.sensorLight
            });
        }
});


//realtime//
$.ajax({
        url: 'https://api.smartcitizen.me/v0/devices/4293/',
        method: 'GET',
        async: true,
        success: function(data){
            console.log(data);
            devObj.sensorTempRT = data.data.sensors['3'].value;
						devObj.sensorNoiseRT = data.data.sensors['4'].value;
						devObj.sensorHumRT = data.data.sensors['2'].value;
						devObj.sensorLightRT = data.data.sensors['0'].value;

        },
        error: function(err){
            console.log(err,'data not found')
        },
        complete: function(){
            devRef.child('bcn-device-realtime').set({
								tempRT: devObj.sensorTempRT,
								noiseRT: devObj.sensorNoiseRT,
								humRT: devObj.sensorHumRT,
								lightRT: devObj.sensorLightRT

            });
        }
});

//Reading from FB//


var rootRefTemp = firebase.database().ref().child("bcn-device-super").child("bcn-device-temp").child("temp");
var rootRefNoise = firebase.database().ref().child("bcn-device-super").child("bcn-device-noise").child("noise");
var rootRefHum = firebase.database().ref().child("bcn-device-super").child("bcn-device-hum").child("hum");
var rootRefLight = firebase.database().ref().child("bcn-device-super").child("bcn-device-light").child("light");

//reading realtime//

var rootRefTempRT = firebase.database().ref().child("bcn-device-super");
var rootRefNoiseRT = firebase.database().ref().child("bcn-device-super");
var rootRefHumRT = firebase.database().ref().child("bcn-device-super");
var rootRefLightRT = firebase.database().ref().child("bcn-device-super");

	rootRefTempRT.once("child_added", snap => {
	var tempRTfinal = snap.child("tempRT").val();
	// console.log(tempRTfinal);
  $('.realtimetemp').append('<h14>'+ tempRTfinal +'</h14>');
	});

  rootRefNoiseRT.once("child_added", snap => {
  var noiseRTfinal = snap.child("noiseRT").val();
  // console.log(tempRTfinal);
  $('.realtimenoise').append('<h14 style="color:#c8ff00">'+ noiseRTfinal +'</h14>');
  });

  rootRefHumRT.once("child_added", snap => {
  var humRTfinal = snap.child("humRT").val();
  // console.log(tempRTfinal);
  $('.realtimehum').append('<h14 style="color:#ffce00">'+ humRTfinal +'</h14>');
  });

  rootRefLightRT.once("child_added", snap => {
  var lightRTfinal = snap.child("lightRT").val();
  // console.log(tempRTfinal);
  $('.realtimelight').append('<h14 style="color:#ff00b1">'+ lightRTfinal +'</h14>');
  });



//graph//

var arrxTemp = new Array ();
var arryTemp = new Array ();

	rootRefTemp.on("child_added", snap => {

  // var xaxisTemp = snap.child("0").val();
  // var yaxisTemp = snap.child("1").val();

  arrxTemp.push(snap.child("0").val());
  arryTemp.push(snap.child("1").val());

	// console.log(snap.child("0").val());



	var tempgraph = {
		x: arrxTemp,
		y: arryTemp,
		type: 'scatter',
		name: 'Temperature',
		marker: {
			color: '#00fff0',
			opacity: 0.8,
			line: {
			  color: '#00fff0',
			  width: 2
			}
		}
	};

	var data = [tempgraph];
	var layout = {
  xaxis: {tickfont: {
      size: 14,
      color: '#798699'
    },
			color: '#798699'
		},
	yaxis: {tickfont: {
	      size: 14,
	      color: '#798699'
	    },
				color: '#798699'
			},

	paper_bgcolor: '#2d3f56',
	plot_bgcolor: '#2d3f56'

  };

	Plotly.newPlot('smartcitizentemp', data, layout, {
	});


});


var arrxNoise = new Array ();
var arryNoise = new Array ();

	rootRefNoise.on("child_added", snap => {

  // var xaxisTemp = snap.child("0").val();
  // var yaxisTemp = snap.child("1").val();

  arrxNoise.push(snap.child("0").val());
  arryNoise.push(snap.child("1").val());

	// console.log(snap.child("0").val());

	//
	// console.log(xaxisNoise);
	// console.log(xaxisNoise);


	var noisegraph = {
		x: arrxNoise,
		y: arryNoise,
		type: 'scatter',
		name: 'Noise',
		marker: {
			color: '#c8ff00',
			opacity: 0.8,
			line: {
			  color: '#c8ff00',
			  width: 2
			}
		}
	};

	var data = [noisegraph];
	var layout = {
  xaxis: {tickfont: {
      size: 14,
      color: '#798699'
    },
			color: '#798699'
		},
	yaxis: {tickfont: {
	      size: 14,
	      color: '#798699'
	    },
				color: '#798699'
			},

	paper_bgcolor: '#2d3f56',
	plot_bgcolor: '#2d3f56'

  };

	Plotly.newPlot('smartcitizennoise', data, layout, {
	});


});

var arrxHum = new Array ();
var arryHum = new Array ();

	rootRefHum.on("child_added", snap => {

  // var xaxisTemp = snap.child("0").val();
  // var yaxisTemp = snap.child("1").val();

  arrxHum.push(snap.child("0").val());
  arryHum.push(snap.child("1").val());

	//
	// console.log(xaxisHum);
	// console.log(yaxisHum);
	var humgraph = {
		x: arrxHum,
		y: arryHum,
		type: 'scatter',
		name: 'Humidity',
		marker: {
			color: '#ffce00',
			opacity: 0.8,
			line: {
			  color: '#ffce00',
			  width: 2
			}
		}
	};

	var data = [humgraph];
	var layout = {
  xaxis: {tickfont: {
      size: 14,
      color: '#798699'
    },
			color: '#798699'
		},
	yaxis: {tickfont: {
	      size: 14,
	      color: '#798699'
	    },
				color: '#798699'
			},

	paper_bgcolor: '#2d3f56',
	plot_bgcolor: '#2d3f56'

  };

	Plotly.newPlot('smartcitizenhum', data, layout, {
	});



});

var arrxLight = new Array ();
var arryLight = new Array ();

  rootRefLight.on("child_added", snap => {

  // var xaxisTemp = snap.child("0").val();
  // var yaxisTemp = snap.child("1").val();

  arrxLight.push(snap.child("0").val());
  arryLight.push(snap.child("1").val());

	//
	// console.log(xaxisLight);
	// console.log(yaxisLight);

	var lightgraph = {
		x: arrxLight,
		y: arryLight,
		type: 'scatter',
		name: 'Light',
		marker: {
			color: '#ff00b1',
			opacity: 0.8,
			line: {
				color: '#ff00b1',
				width: 2
			}
		}
	};

	var data = [lightgraph];
	var layout = {
	xaxis: {tickfont: {
			size: 14,
			color: '#798699'
		},
			color: '#798699'
		},
	yaxis: {tickfont: {
				size: 14,
				color: '#798699'
			},
				color: '#798699'
			},

	paper_bgcolor: '#2d3f56',
	plot_bgcolor: '#2d3f56'

	};

	Plotly.newPlot('smartcitizenlight', data, layout, {
	});





});
