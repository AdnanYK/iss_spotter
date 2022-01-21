

const {fetchMyIP,fetchCoordsByIP,fetchISSFlyOverTimes,nextISSTimesForMyLocation} = require("./iss");
// const fetchCoordsByIP = require("./iss");

// fetchMyIP((error, IP) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , IP);
// });

// const IP = "216.181.222.132";

// fetchCoordsByIP(IP, (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log(data);
// });

// const coords = { latitude: 45.3495, longitude: -75.7742 };
// fetchISSFlyOverTimes(coords, (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log(data);
// });



nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});


