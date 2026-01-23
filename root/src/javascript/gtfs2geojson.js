// import gtfs2geojson from '../../node_modules/gtfs2geojson/index.js';
var gtfs2geojson = require('../../node_modules/gtfs2geojson/index.js');
console.log("gtfs2geojson: ", gtfs2geojson);

function convertGTFStoGeoJSON() {
  var yolobusStops = gtfs2geojson.stops('../../gtfs/Yolobus GTFS/stops.txt');
  console.log("yolobus stops: ", yolobusStops);
  var yolobusRoutes = gtfs2geojson.lines('../../gtfs/Yolobus GTFS/shapes.txt');
  console.log("yolobus routes: ", yolobusRoutes);
  var unitransStops = gtfs2geojson.stops('../../gtfs/Unitrans GTFS/stops.txt');
  var unitransRoutes = gtfs2geojson.lines('../../gtfs/Unitrans GTFS/shapes.txt');
  console.log("unitrans stops: ", unitransStops);
  console.log("unitrans routes: ", unitransRoutes);
  return { yolobusStops, yolobusRoutes, unitransStops, unitransRoutes };
}
transitData = convertGTFStoGeoJSON();