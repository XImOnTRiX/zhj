// import Geocode from 'react-geocode';
//
// const location = {
//   range: [
//
//   ]
// }
//
// Geocode.setApiKey("AIzaSyAImnSxiTv8Iuy1hzWkc-YkX3qNtpmLRHk");
// Geocode.enableDebug();
//
// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };
//
// test
//
// var success = function(pos) {
//   var crd = pos.coords;
//   console.log(Geocode.fromLatLng(crd.latitude, crd.longitude));
//   Geocode.fromLatLng(crd.latitude, crd.longitude).then(
//     response => {
//       console.log(response);
//       const address = response.results[0].formatted_address;
//       console.log(address);
//     }
//   ).catch(
//     response => {
//       console.log(response);
//     }
//   )
// }
//
// var error = function(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
//   console.log('nenenen');
// }
//
//
// export function gps() {
//   navigator.geolocation.getCurrentPosition(success, error, options);
// }
