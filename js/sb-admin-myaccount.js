!function(e){"use strict";e('.navbar-sidenav [data-toggle="tooltip"]').tooltip({template:'<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'}),e("#sidenavToggler").click(function(o){o.preventDefault(),e("body").toggleClass("sidenav-toggled"),e(".navbar-sidenav .nav-link-collapse").addClass("collapsed"),e(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show")}),e(".navbar-sidenav .nav-link-collapse").click(function(o){o.preventDefault(),e("body").removeClass("sidenav-toggled")}),e("body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse").on("mousewheel DOMMouseScroll",function(e){var o=e.originalEvent,t=o.wheelDelta||-o.detail;this.scrollTop+=30*(t<0?1:-1),e.preventDefault()}),e(document).scroll(function(){e(this).scrollTop()>100?e(".scroll-to-top").fadeIn():e(".scroll-to-top").fadeOut()}),e('[data-toggle="tooltip"]').tooltip(),e(document).on("click","a.scroll-to-top",function(o){var t=e(this);e("html, body").stop().animate({scrollTop:e(t.attr("href")).offset().top},1e3,"easeInOutExpo"),o.preventDefault()})}(jQuery);



// var map = L.map('mapid').setView([31.205691, 121.420405], 14);
// var map2 = L.map('mapid2').setView([31.205691, 121.420405], 14);
//
//
// L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
// 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'}).addTo(map);
//
// L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'}).addTo(map2);
//   //
//   // var CartoDB_DarkMatter = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
//   // 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
//   // 	subdomains: 'abcd',
//   // 	maxZoom: 19
//   // });
//
// // var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
// // 	maxZoom: 18,
// // 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// // });
// //
// // var CartoDB_PositronNoLabels = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
// // 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
// // 	subdomains: 'abcd',
// // 	maxZoom: 19
// // });
//
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
//

// example 1 - tester
// TESTER = document.getElementById('tester');
//
// Plotly.plot( TESTER, [{
//     x: [1, 2, 3, 4, 5],
//     y: [1, 2, 4, 8, 16] }], {
//     margin: { t: 0 } } );
/* Current Plotly.js version */
// console.log( Plotly.BUILD );


// USERSPERDAY_GRAPH



var panda = {
  x: ['Jun 2017','Jul 2017','Aug 2017','Sep 2017','Oct 2017','Nov 2017','Dec 2017','Jan 2018','Feb 2018','Mar 2018','Apr 2018','May 2018'],
  y: [2, 5, 10, 20, 30, 50, 40, 80, 75, 90, 80, 100],
  type: 'scatter',
  name: 'Panda',
  marker: {
    color: 'rgb(101,191,206)',
		width: 3
  }
};

var friend1 = {
  x: ['Jun 2017','Jul 2017','Aug 2017','Sep 2017','Oct 2017','Nov 2017','Dec 2017','Jan 2018','Feb 2018','Mar 2018','Apr 2018','May 2018'],
  y: [1, 2, 20, 40, 50, 40, 30, 90, 80, 90, 80, 100],
  type: 'scatter',
  name: 'Lion',
  marker: {
    color: '#798699',
		mode: 'lines',
		width: 1

  }
};

var friend2 = {
  x: ['Jun 2017','Jul 2017','Aug 2017','Sep 2017','Oct 2017','Nov 2017','Dec 2017','Jan 2018','Feb 2018','Mar 2018','Apr 2018','May 2018'],
  y: [1, 10, 15, 8, 10, 60, 30, 40, 100, 40, 50, 80],
  type: 'scatter',
  name: 'Koala',
  marker: {
    color: '#96a5ba',
		width: 1

  }
};

var data = [friend1, friend2, panda];

// var layout = {
//   // title: 'Users/Hour',
//   xaxis: {
//     tickangle: -45
//   },
//   barmode: 'group'
// };

Plotly.newPlot('usersday', data, layout);
