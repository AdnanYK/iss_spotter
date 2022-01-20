

const {fetchMyIP,fetchCoordsByIP} = require("./iss");
// const fetchCoordsByIP = require("./iss");

fetchMyIP((error, IP) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , IP);
});

const IP = "216.181.222.132";

fetchCoordsByIP(IP, (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log(data);
});
