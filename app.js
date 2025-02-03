const express = require("express"); //require express to create the express environment
const app = express(); //create the referral code app
const port = 2080;
const storeReferralDataToDB = require("./storeDBmodule");

app.get("/", (req, res) => {
  res.send("Hey, your express app is working");
});

app.listen(port, () => {
  console.log("Be happy, your referralcodes system is up and running!");
}); //listen for connection to the app
