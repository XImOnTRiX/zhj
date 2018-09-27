import Geocode from 'react-geocode';

Geocode.setApiKey("");
Geocode.enableDebug();

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var success = function(pos) {
  var crd = pos.coords;
  Geocode.fromLatLng(crd.latitude, crd.longitude).then(
    response => {
      console.log(response);
      const address = response.results[0].formatted_address;
      console.log(address);
    }
  )
}
var error = function(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}


export function gps() {
  navigator.geolocation.getCurrentPosition(success, error, options);
}
