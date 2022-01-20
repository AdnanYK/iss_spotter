const request = require('request');
// const requesT = require('request-promise');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  const URL = 'https://api.ipify.org?format=json';
  request(URL, (error, response, body) => {
    // error can be set if invalid domain, user is offline, etc.
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    // if we get here, all's well and we got the data
    const IP = JSON.parse(body).ip;
    callback(null, IP);
  });
};

// const fetchCoordsByIP = function(IP) {
//   requesT('https://api.freegeoip.app/json/?apikey=' + IP)
// .then(response => {
//     console.log(response);
// })
// .catch(error => {
//     console.log(error);
// })
// };

const fetchCoordsByIP = function(IP,callback) {
  const URL = `https://api.freegeoip.app/json/${IP}?apikey=27f97620-7a46-11ec-a7b2-855c5cecf271`;
  request(URL, (error, response, body) => {
    // error can be set if invalid domain, user is offline, etc.
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    // if we get here, all's well and we got the data
    const loc = JSON.parse(body);
    callback(null, {latitude: loc.latitude, longitude: loc.longitude});
  });
};

module.exports = {fetchMyIP,fetchCoordsByIP};