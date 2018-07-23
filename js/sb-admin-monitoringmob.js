!function(e){"use strict";e('.navbar-sidenav [data-toggle="tooltip"]').tooltip({template:'<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'}),e("#sidenavToggler").click(function(o){o.preventDefault(),e("body").toggleClass("sidenav-toggled"),e(".navbar-sidenav .nav-link-collapse").addClass("collapsed"),e(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show")}),e(".navbar-sidenav .nav-link-collapse").click(function(o){o.preventDefault(),e("body").removeClass("sidenav-toggled")}),e("body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse").on("mousewheel DOMMouseScroll",function(e){var o=e.originalEvent,t=o.wheelDelta||-o.detail;this.scrollTop+=30*(t<0?1:-1),e.preventDefault()}),e(document).scroll(function(){e(this).scrollTop()>100?e(".scroll-to-top").fadeIn():e(".scroll-to-top").fadeOut()}),e('[data-toggle="tooltip"]').tooltip(),e(document).on("click","a.scroll-to-top",function(o){var t=e(this);e("html, body").stop().animate({scrollTop:e(t.attr("href")).offset().top},1e3,"easeInOutExpo"),o.preventDefault()})}(jQuery);



var map = L.map('mapid').setView([31.205691, 121.420405], 15);
var map2 = L.map('mapid2').setView([31.205691, 121.420405], 15);


L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'}).addTo(map);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'}).addTo(map2);


// var geojsonMarkerOptions = {
//     radius: 10,
//     fillColor: 'rgb(101,191,206,0)',
//     color: 'rgb(101,191,206)',
//     weight: 5,
//     opacity: 0.5,
//     fillOpacity: 0.8
// };
//
// var geojsonMarkerOptions2 = {
// 	radius: 30,
// 	fillColor: 'rgb(101,191,206,0.2)',
// 	color: 'rgb(101,191,206)',
// 	weight: 1,
// 	opacity: 1,
// 	fillOpacity: 0.8
// };
//
//
// var pinta = L.geoJSON(lines, {
//
// 	pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, geojsonMarkerOptions);
//     }
//
// }).addTo(map);
//
// var pinta = L.geoJSON(lines, {
//
// 	pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, geojsonMarkerOptions2);
//     }
//
// }).addTo(map2);

//mobility data
var dbCSV = 'data/mobility.csv';
var dbJSON = 'data/mobility.json';
var dataCSV = new Array();
var dataJSON = new Array();
var markers = new Array();
var markers2 = new Array();

Papa.parse(dbCSV, {
	download: true,
	complete: function(results) {
		dataCSV = results.data;
	}
});



//INTERACTIVITY FOR FREQUENCY
$.getJSON(dbJSON, function(data) {
		data.forEach(function(element){
				var mkr = L.circle([parseFloat(element['lat']), parseFloat(element['lon'])],{
						color: 'rgb(101,191,206)',
						fillColor: 'rgb(101,191,206,0.5)',
						fillOpacity: 1,
						weight: 1,
						radius: 30
				}).addTo(map);

				mkr['Frequency'] = element['Frequency'];

				markers.push(mkr);
		});
});

$('.a_all').click(
		function(){
				markers.forEach(function(element){
						if(element['Frequency'] >'0'){
								element.setStyle({fillColor: 'rgb(101,191,206)', color: 'rgb(101,191,206,0.5)'});
						}else{
								element.setStyle({fillColor: 'rgb(101,191,206)', color: "rgb(101,191,206,0.5)"});
						}
				})
		}
);
$('.a_ok').click(
		function(){
				markers.forEach(function(element){
						if(element['Frequency'] <'4'){
								element.setStyle({fillColor: 'rgb(101,191,206,0.9)'});
						}else{
								element.setStyle({fillColor: 'rgb(220,220,220)', color: "rgb(169,169,169)"});
						}
				})
		}
);
$('.a_medium').click(
		function(){
				markers.forEach(function(element){
						if(element['Frequency'] >='4'){
								element.setStyle({fillColor: 'rgb(101,191,206,0.9)'});
						}else{
								element.setStyle({fillColor: 'rgb(220,220,220)', color: "rgb(169,169,169)"});
						}
				})
		}
);
$('.a_bad').click(
		function(){
				markers.forEach(function(element){
						if(element['Frequency'] >='6'){
								element.setStyle({fillColor: 'rgb(101,191,206,0.9)'});
						}else{
								element.setStyle({fillColor: 'rgb(220,220,220)', color: "rgb(169,169,169)"});
						}
				})
		}
);

//INTERACTIVITY FOR KM TRAVELLED

$.getJSON(dbJSON, function(data) {
		data.forEach(function(element){
				var mkr2 = L.circle([parseFloat(element['lat']), parseFloat(element['lon'])],{
						color: 'rgb(101,191,206)',
						fillColor: 'rgb(101,191,206,0.5)',
						fillOpacity: 1,
						dashArray : "1, 2",
						weight: 1,
						radius: 70
				}).addTo(map2);
				mkr2['KmTravel'] = element['KmTravel'];
				markers2.push(mkr2);
		});
});

$('.a_all_2').click(
		function(){
				markers2.forEach(function(element){
						if(element['KmTravel'] >'0'){
								// element.setStyle({fillColor: 'rgb(101,191,206)', color: 'rgb(101,191,206,0.5)'});
								element.setRadius(70);
						}else{
								element.setRadius(70);
								// element.setStyle({fillColor: 'rgb(101,191,206)', color: "rgb(101,191,206,0.5)"});
						}
				})
		}
);
$('.a_ok_2').click(
		function(){
				markers2.forEach(function(element){
						if(element['KmTravel'] >='15'){
								element.setRadius(140);
						}else{
								element.setRadius(20);
						}
				})
		}
);
$('.a_medium_2').click(
		function(){
				markers2.forEach(function(element){
						if(element['KmTravel'] <'15'){
								element.setRadius(100);
						}else{
								// element.setStyle({fillColor: 'rgb(220,220,220)', color: "rgb(169,169,169)"});
								element.setRadius(20);
						}
				})
		}
);
$('.a_bad_2').click(
		function(){
				markers2.forEach(function(element){
						if(element['KmTravel'] <'10'){
								element.setRadius(70);
						}else{
								// element.setStyle({fillColor: 'rgb(220,220,220)', color: "rgb(169,169,169)"});
								element.setRadius(20);
						}
				})
		}
);

// USERSPERDAY_GRAPH
var bus = {
  x: ['01.00','02.00','03.00','04.00','05.00','06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00',
 '18.00','19.00','20.00','21.00','22.00','23.00','24.00'],
	y: [0, 0, 0, 0, 2000, 3000, 4500, 5000, 5000, 6000, 5500, 3000,3000, 2000, 1000, 500, 600, 600, 700, 2500, 6000, 5500, 6000, 6000],
	type: 'bar',
  name: 'Bus',
  marker: {
    color: 'rgb(101,191,206)',
    opacity: 0.8,
    // line: {
    //   color: '#B3DECD',
    //   width: 2
    // }
  }
};

var metro = {
  x: ['01.00','02.00','03.00','04.00','05.00','06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00',
 '18.00','19.00','20.00','21.00','22.00','23.00','24.00'],
  y: [0, 0, 0, 0, 500, 1200, 13500, 14000, 14000, 12000, 10000, 9000,8000, 7000, 7000, 8000, 9000, 12000, 14000, 15000, 15000, 11000, 9000, 7000],
  type: 'bar',
  name: 'Metro',
  marker: {
    color: '#798699',
    opacity: 0.8,
    // line: {
    //   color: '#798699',
    //   width: 2
    // }
  }
};

var taxi = {
  x: ['01.00','02.00','03.00','04.00','05.00','06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00',
 '18.00','19.00','20.00','21.00','22.00','23.00','24.00'],
  y: [500, 250, 150, 100, 250, 400, 50, 100, 50, 50, 85, 50,50, 50, 100, 200, 350, 200, 400, 400, 300, 200, 250, 300],
  type: 'bar',
  name: 'Taxi',
  marker: {
    color: '#B3DECD',
    opacity: 0.8,
    // line: {
    //   color: '#B3DECD',
    //   width: 2
    // }
  }
};

var data = [bus, metro,taxi];

var layout = {
  // title: 'Users/Hour',
  xaxis: {
    tickangle: -45
  },
  barmode: 'group'
};

Plotly.newPlot('usersday', data, layout);
