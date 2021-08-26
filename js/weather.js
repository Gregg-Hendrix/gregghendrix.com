// OpenWeatherMap API. Do not share it publicly.
const api = `2df301462091b350445acc4cc37e49e`;

window.addEventListener('load', () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
    });
  }
});